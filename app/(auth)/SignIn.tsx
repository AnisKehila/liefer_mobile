import React from "react";
import { Text, View } from "react-native";
import LoginForm from "@/components/forms/LoginForm";
import Animated, { SlideInDown, SlideInUp } from "react-native-reanimated";
const SignIn = () => {
  return (
    <Animated.View
      entering={SlideInDown}
      className="flex-1 max-h-[72%] bg-neutral-100 rounded-tr-[68px] shadow-2xl shadow-black pt-16 pb-12 px-7"
    >
      <View>
        <Text className="text-4xl font-medium">Welcome Back</Text>
        <Text className="text-xl text-neutral-500">
          Sign in to your account to continue
        </Text>
      </View>
      <LoginForm />
    </Animated.View>
  );
};

export default SignIn;
