import React from "react";
import { Text, View } from "react-native";
import LoginForm from "@/components/LoginForm";

const Page = () => {
  return (
    <>
      <View>
        <Text className="text-4xl font-medium">Welcome Back</Text>
        <Text className="text-xl text-neutral-400">
          Sign in to your account to continue
        </Text>
      </View>
      <LoginForm />
    </>
  );
};

export default Page;
