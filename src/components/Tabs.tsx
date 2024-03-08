import React from "react";
import { View } from "react-native";
import { usePathname } from "expo-router";
import TabsLink from "./ui/TabsLink";

function Tabs() {
  const active = usePathname().split("/", -1)[1];

  return (
    <View className="bg-neutral-100 shadow-xl shadow-black flex-row">
      <TabsLink icon="home" isActive={active === "home"} href="/home" />
      <TabsLink icon="add-circle" isActive={active === "add"} href="/add" />
      <TabsLink icon="cube" isActive={active === "packages"} href="/packages" />
      <TabsLink
        icon="settings"
        isActive={active === "settings"}
        href="/settings"
      />
    </View>
  );
}

export default Tabs;
