import React from "react";
import { View, Text } from "react-native";
import SignUpForm from "@/components/forms/SignUpForm";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Animated, { SlideInDown } from "react-native-reanimated";

const SignUp = () => {
  return (
    <Animated.View
      entering={SlideInDown}
      className="flex-1 max-h-[78%] bg-neutral-100 rounded-tr-[68px] shadow-2xl shadow-black px-7 pb-12"
    >
      <Link href={"/(auth)/SignIn"} className="pt-4">
        <View className="flex-row items-center">
          <Ionicons name="arrow-back" size={18} />
          <Text className="text-lg">Back</Text>
        </View>
      </Link>
      <View className="pt-8">
        <Text className="text-4xl font-medium">Create account</Text>
        <Text className="text-lg text-neutral-500">
          Fill out a few quick details to get you started
        </Text>
      </View>
      <SignUpForm />
    </Animated.View>
  );
};

export default SignUp;
