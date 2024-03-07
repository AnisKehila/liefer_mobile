import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { useApi } from "@/axios/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Page = () => {
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(user ? false : true);
  const api = useApi();
  useEffect(() => {
    (async () => {
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      if (refreshToken) {
        const resp = await api.get("/user/me");
        setUser(resp.data);
      }
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) return;
  if (user) return <Redirect href="/(dashboard)/Home" />;
  return <Redirect href="/(auth)/SignIn" />;
};

export default Page;
