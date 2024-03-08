import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { createContext, useState, useContext, ReactNode } from "react";
import Toast from "react-native-toast-message";
type AuthProps = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: user | null;
  setUser: React.Dispatch<React.SetStateAction<user | null>>;
  onLogin: ({
    user,
    accessToken,
    cookie,
  }: {
    user: user;
    accessToken: string;
    cookie: string;
  }) => Promise<void>;
  onLogOut: () => void;
};

export const AuthContext = createContext<AuthProps>({} as AuthProps);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<user | null>(null);
  const router = useRouter();

  const onLogin = async ({
    user,
    accessToken,
    cookie,
  }: {
    user: user;
    accessToken: string;
    cookie: string;
  }) => {
    try {
      setUser(user);
      setToken(accessToken);
      await AsyncStorage.setItem("refreshToken", cookie);
      router.push("/(dashboard)/home");
      Toast.show({
        type: "info",
        position: "bottom",
        text1: "logged in",
        text1Style: { fontSize: 16, textTransform: "capitalize" },
      });
    } catch (e) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Looks like there is a probleme saving data to your device",
        text1Style: { fontSize: 16, textTransform: "capitalize" },
      });
    }
  };
  const onLogOut = async () => {
    await AsyncStorage.removeItem("refreshToken");
    setUser(null);
    router.push("/(auth)/SignIn");
  };
  const value = {
    user,
    setUser,
    token,
    setToken,
    onLogin,
    onLogOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
