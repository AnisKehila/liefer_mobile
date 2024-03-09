import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BarChart } from "react-native-gifted-charts";

const GeneralInfo = () => {
  const barData = [
    { value: 2000, label: "Ja" },
    { value: 1800, label: "Fe" },
    { value: 4000, label: "Ma" },
    { value: 6000, label: "Ap" },
    { value: 1400, label: "Ma" },
    { value: 1210, label: "Ju" },
    { value: 3800, label: "Jul" },
    { value: 0, label: "Au" },
    { value: 190, label: "Se" },
    { value: 6000, label: "Oc" },
    { value: 680, label: "No" },
    { value: 510, label: "De" },
  ];

  return (
    <View>
      <View className="mt-6 p-4 rounded-xl bg-red bg-opacity-10 shadow-xl shadow-neutral-400 relative">
        <Text className="text-white font-medium text-xl">Balance</Text>
        <View className="flex-row mt-4">
          <Text className="text-white flex-1 text-start text-base">Earned</Text>
          <Text className="text-white flex-1 text-start text-base">
            In account
          </Text>
          <Text className="text-white flex-1 text-start text-base">
            Withdrawed
          </Text>
        </View>
        <View className="flex-row ">
          <Text className="text-white flex-1 text-start text-base">
            18000 DZD
          </Text>
          <Text className="text-white flex-1 text-start text-base">
            10000 DZD
          </Text>
          <Text className="text-white flex-1 text-start text-base">
            8000 DZD
          </Text>
        </View>
        <View className="absolute top-1 right-1">
          <View className="rotate-[-205deg]">
            <Ionicons name="wallet-outline" color="white" size={56} />
          </View>
        </View>
      </View>
      <View className="mt-6 p-4 rounded-xl bg-indigo shadow-xl shadow-neutral-400 relative">
        <Text className="text-white font-medium text-xl">Packages</Text>
        <View className="flex-row mt-4">
          <Text className="text-white flex-1 text-start text-base">Total</Text>
          <Text className="text-white flex-1 text-start text-base">
            Delivered
          </Text>
          <Text className="text-white flex-1 text-start text-base">
            Returned
          </Text>
        </View>
        <View className="flex-row">
          <Text className="text-white flex-1 text-start text-base">14</Text>
          <Text className="text-white flex-1 text-start text-base">10</Text>
          <Text className="text-white flex-1 text-start text-base">4</Text>
        </View>
        <View className="absolute top-1 right-1">
          <View className="rotate-[45deg]">
            <Ionicons name="cube" color="white" size={56} />
          </View>
        </View>
      </View>
      <View className="mt-6 p-4 rounded-xl bg-neutral-200 shadow-md shadow-neutral-100">
        <Text className="font-medium text-xl">Cash Flow</Text>
        <Text className="text-base">Total revenue graph</Text>
        <View className="mt-4">
          <BarChart
            data={barData}
            isAnimated
            barBorderRadius={4}
            width={260}
            frontColor="#380D71"
          />
        </View>
      </View>
    </View>
  );
};

export default GeneralInfo;
