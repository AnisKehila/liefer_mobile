import { View, Text } from "react-native";
import React from "react";
import Avatar from "../ui/Avatar";
import { Ionicons } from "@expo/vector-icons";
import { getWelcomePhrase } from "@/utils/functions";

const Header = ({ name }: { name: string }) => {
  const welcomePhrase = getWelcomePhrase();

  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center">
        <Avatar />
        <View className="pl-4">
          <Text className="text-neutral-600 text-base">Hi, {name}</Text>
          <Text className="text-lg font-medium">{welcomePhrase}</Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={26} />
    </View>
  );
};

export default Header;
