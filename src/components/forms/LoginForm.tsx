import React, { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "../ui/Input";
import { Link } from "expo-router";
import Or from "../ui/Or";
import SocialAuth from "../SocialAuth";
import { isPhoneValide } from "@/utils/schemes";
import Toast from "react-native-toast-message";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios/api";
import { ActivityIndicator } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

const LoginForm = () => {
  const [pnum, setPnum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { onLogin } = useAuth();
  const isInValide: boolean = useMemo(() => {
    return !isPhoneValide(pnum);
  }, [pnum]);

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const resp = await api.post("/user/login", { phone: pnum, password });
      const cookies = resp.headers["set-cookie"];

      return {
        user: resp.data.user as user,
        accessToken: resp.data.accessToken as string,
        cookie: cookies![0],
      };
    },
    onSuccess: ({ user, accessToken, cookie }) =>
      onLogin({ user, accessToken, cookie }),
    onError: (err: any) => {
      Toast.show({
        type: "error",
        position: "bottom",
        text1:
          err.response?.data?.message ||
          "Network error please try again later!",
        text1Style: { fontSize: 16, textTransform: "capitalize" },
      });
    },
  });

  const onSubmit = () => {
    if (isPending) return;

    if (!pnum || !password) {
      Toast.show({
        type: "error",
        text1: "Please fill the required fields!",
        position: "bottom",
        text1Style: { fontSize: 16 },
      });
      return;
    }
    if (isInValide) {
      Toast.show({
        type: "error",
        text1: "Phone number is wrong!",
        position: "bottom",
        text1Style: { fontSize: 16 },
      });
      return;
    }
    mutate();
  };

  return (
    <View className="mt-6 flex-1">
      <Animated.View entering={FadeInDown.delay(250)} className="ml-2">
        <Text className="text-lg font-medium">Phone number</Text>
        <Input
          value={pnum}
          isInValide={pnum.length > 0 && isInValide}
          placeHolder="0X xx xx xx xx"
          setValue={setPnum}
          type="number"
        >
          <Ionicons name="call-outline" size={20} />
        </Input>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(500)} className="ml-2 mt-6">
        <Text className="text-lg font-medium">Password</Text>
        <Input
          placeHolder="GUdm7euCxgA"
          value={password}
          setValue={setPassword}
          type={passwordShown ? "text" : "password"}
        >
          <Ionicons
            name={passwordShown ? "eye-off-outline" : "eye-outline"}
            size={20}
            onPress={() => setPasswordShown(!passwordShown)}
          />
        </Input>
      </Animated.View>
      <View className="flex-1 justify-end">
        <Text className="text-sm text-neutral-500 mb-2">
          Don't have an account yet?{" "}
          <Link href="/(auth)/SignUp">
            <Text className="text-violet underline">Sign Up</Text>
          </Link>
        </Text>
        <Pressable
          className={`items-center p-3 rounded-sm bg-red ${
            isPending ? "" : " active:bg-rose-700"
          }`}
          onPress={() => onSubmit()}
        >
          {isPending ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text className="text-white text-base">Let's Go</Text>
          )}
        </Pressable>
        <Or />
        <SocialAuth />
      </View>
    </View>
  );
};

export default LoginForm;
