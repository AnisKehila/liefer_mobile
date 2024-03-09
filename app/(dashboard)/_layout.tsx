import Tabs from "@/components/Tabs";
import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const DashLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50">
      <View className="flex-1 pb-3">
        <Slot />
      </View>
      <Tabs />
    </SafeAreaView>
  );
};

export default DashLayout;
