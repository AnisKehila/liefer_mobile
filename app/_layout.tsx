import { Slot } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";

const HomePageLayout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Slot />
        <Toast />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default HomePageLayout;
