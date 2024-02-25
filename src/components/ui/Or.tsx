import { View, Text } from "react-native";
import React from "react";

const Or = () => {
  return (
    <View className="flex-row items-center mt-2">
      <View className="flex-1 h-[1px] bg-neutral-500" />
      <Text className="text-neutral-500 px-2">Or</Text>
      <View className="flex-1 h-[1px] bg-neutral-500" />
    </View>
  );
};

export default Or;
