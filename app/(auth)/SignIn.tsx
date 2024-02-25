import React from "react";
import { Text, View } from "react-native";
import LoginForm from "@/components/LoginForm";

const SignIn = () => {
  return (
    <View className="flex-1 max-h-[62%] bg-neutral-100 rounded-tr-[68px] shadow-2xl shadow-black pt-16 pb-12 px-7">
      <View>
        <Text className="text-4xl font-medium">Welcome Back</Text>
        <Text className="text-xl text-neutral-500">
          Sign in to your account to continue
        </Text>
      </View>
      <LoginForm />
    </View>
  );
};

export default SignIn;
