import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SocialAuth = () => {
  const googleLogo =
    require("@/assets/images/google-icon.png") as ImageSourcePropType;
  return (
    <View className="flex-row items-center justify-evenly mt-4">
      <Pressable className="rounded-full active:bg-neutral-200">
        <Image source={googleLogo} className="w-14 h-14" />
      </Pressable>
      <Pressable className="rounded-full active:bg-neutral-200">
        <Ionicons name="logo-facebook" size={56} color={"#4267B2"} />
      </Pressable>
    </View>
  );
};

export default SocialAuth;
