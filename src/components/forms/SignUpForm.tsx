import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Input from "../ui/Input";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import { isEmailValid, isPhoneValide } from "@/utils/schemes";
import { useMutation } from "@tanstack/react-query";
import api from "@/axios/api";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const resp = await api.post("/user/signup", {
        name,
        email,
        phone,
        password,
      });
      return resp.data;
    },
    onSuccess: (data: any) => {
      Toast.show({
        type: "info",
        position: "bottom",
        text1: "Signed up succesfully!",
        text1Style: { fontSize: 16 },
      });
    },
    onError: (err: any) => {
      Toast.show({
        type: "error",
        position: "bottom",
        text1:
          err.response?.data?.message ||
          "Network error please try again later!",
        text1Style: { fontSize: 16 },
      });
    },
  });
  const onSubmit = () => {
    if (isPending) return;
    if (!name || !phone || !password || !email) {
      Toast.show({
        type: "error",
        text1: "Please fill the required fields!",
        position: "bottom",
        text1Style: { fontSize: 16 },
      });
      return;
    }
    if (!isEmailValid(email)) {
      Toast.show({
        type: "error",
        text1: "Email is wrong!",
        position: "bottom",
        text1Style: { fontSize: 16 },
      });
      return;
    }
    if (!isPhoneValide(phone)) {
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
    <View className="flex-1 mt-6">
      <View className="ml-1">
        <Text className="text-lg font-medium">Name</Text>
        <Input
          placeHolder="What's do we call you?"
          value={name}
          setValue={setName}
        >
          <Ionicons name="person-circle-outline" size={20} />
        </Input>
      </View>
      <View className="ml-1 mt-6">
        <Text className="text-lg font-medium">Email</Text>
        <Input placeHolder="lorem@ipsum.com" value={email} setValue={setEmail}>
          <Ionicons name="mail-outline" size={20} />
        </Input>
      </View>
      <View className="ml-1 mt-6">
        <Text className="text-lg font-medium">Phone number</Text>
        <Input
          placeHolder="0X xx xx xx xx"
          value={phone}
          setValue={setPhone}
          type="number"
        >
          <Ionicons name="call-outline" size={20} />
        </Input>
      </View>
      <View className="ml-1 mt-6">
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
      <Pressable
        className="bg-red items-center p-4 rounded-sm mt-auto active:bg-rose-700"
        onPress={() => onSubmit()}
      >
        {isPending ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-base">Let's Go</Text>
        )}
      </Pressable>
    </View>
  );
};

export default SignUpForm;
