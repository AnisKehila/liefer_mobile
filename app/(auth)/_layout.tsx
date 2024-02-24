import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const AuthLayout = () => {
  const logo =
    require("@/assets/images/logo-vertical.png") as ImageSourcePropType;
  return (
    <LinearGradient
      colors={["rgba(56,13,113,1)", "rgba(235,51,73,1)"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <View className=" min-h-[32%] items-center justify-center">
          <Image source={logo} className="w-32 h-32" />
        </View>
        <View className="flex-1 bg-neutral-100 rounded-tr-[68px] shadow-2xl shadow-black pt-16 pb-12 px-7">
          <Slot />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthLayout;
