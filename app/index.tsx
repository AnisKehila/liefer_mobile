import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Page = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      setToken(await AsyncStorage.getItem("refreshToken"));
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) return;
  if (token) return <Redirect href="/(dashboard)/Home" />;
  return <Redirect href="/(auth)/SignIn" />;
};

export default Page;
