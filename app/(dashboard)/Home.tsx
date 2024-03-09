import { ScrollView, View } from "react-native";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/home/Header";
import GeneralInfo from "@/components/home/GeneralInfo";

const Home = () => {
  const { user } = useAuth();
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="p-4">
      <View className="mb-12">
        <Header name={user!.name} />
        <GeneralInfo />
      </View>
    </ScrollView>
  );
};

export default Home;
