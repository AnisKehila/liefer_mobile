import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import Animated, { SlideInDown, SlideInUp } from "react-native-reanimated";

const DashLayout = () => {
  const logo =
    require("@/assets/images/logo-vertical.png") as ImageSourcePropType;
  return (
    <SafeAreaView className="flex-1">
      <Slot />
    </SafeAreaView>
  );
};

export default DashLayout;
