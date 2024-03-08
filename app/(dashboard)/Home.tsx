import { Text, View } from "react-native";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();
  return (
    <View className="flex-1">
      <Text>{user!.name}</Text>
    </View>
  );
};

export default Home;
