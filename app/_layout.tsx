import { Slot } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";

const HomePageLayout = () => {
  return (
    <>
      <Slot />
      <Toast />
    </>
  );
};

export default HomePageLayout;
