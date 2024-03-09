import { ScrollView, View } from "react-native";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/home/Header";
import GeneralInfo from "@/components/home/GeneralInfo";

const Home = () => {
  const { user } = useAuth();
  return (
    <View className="p-5">
      <Header name={user!.name} />
      <GeneralInfo />
    </View>
  );
};

export default Home;
