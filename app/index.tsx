import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl">Page</Text>
    </SafeAreaView>
  );
};

export default Page;
