import React, { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "./ui/Input";
import { Link } from "expo-router";
import Or from "./ui/Or";
import SocialAuth from "./SocialAuth";
import { isPhoneValide } from "@/utils/isPhoneValide";

const LoginForm = () => {
  const [pnum, setPnum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const isInValide: boolean = useMemo(() => {
    return isPhoneValide(pnum);
  }, [pnum]);

  return (
    <View className="mt-6 flex-1">
      <View className="ml-2">
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
      </View>
      <View className="ml-2 mt-6">
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
      </View>
      <View className="flex-1 justify-end">
        <Text className="text-sm text-neutral-500 mb-2">
          Don't have an account yet?{" "}
          <Link href="/(auth)/SignUp">
            <Text className="text-violet underline">Sign Up</Text>
          </Link>
        </Text>
        <Pressable className="bg-red items-center p-3 rounded-sm active:bg-rose-700">
          <Text className="text-white">Let's Go</Text>
        </Pressable>
        <Or />
        <SocialAuth />
      </View>
    </View>
  );
};

export default LoginForm;
