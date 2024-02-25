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
        <View className="items-center mt-auto mb-16">
          <Image source={logo} className="w-32 h-32" />
        </View>
        <Slot />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AuthLayout;
