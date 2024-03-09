import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BarChart } from "react-native-gifted-charts";
import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/axios/api";

const GeneralInfo = () => {
  const api = useApi();
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-balance-and-packages"],
    queryFn: async () => {
      const pack = await api.get("/package/count");
      const balance = await api.get("/user/balance");
      return {
        packages: pack.data.count,
        ...balance.data.user,
      } as {
        money_in_account: Number;
        money_withdrawed: Number;
        money_total: Number;
        packages: {
          confirmed: Number;
          delivered: Number;
          onRoad: Number;
          returned: Number;
          total: Number;
        };
      };
    },
    refetchOnWindowFocus: false,
  });
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

  if (isLoading) return <Text>Loading</Text>;
  if (!data && !isLoading) return <Text>Error</Text>;
  return (
    <View>
      <View className="mt-4 p-4 rounded-xl bg-red bg-opacity-10 shadow-xl shadow-neutral-400 relative">
        <Text className="text-white font-medium text-xl">Balance</Text>
        <View className="flex-row mt-5">
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
            {`${data!.money_total}`} DZD
          </Text>
          <Text className="text-white flex-1 text-start text-base">
            {`${data!.money_in_account}`} DZD
          </Text>
          <Text className="text-white flex-1 text-start text-base">
            {`${data!.money_withdrawed}`} DZD
          </Text>
        </View>
        <View className="absolute top-1 left-1 opacity-10">
          <View className="rotate-45">
            <Ionicons name="wallet-outline" color="white" size={56} />
          </View>
        </View>
      </View>
      <View
        style={{ backgroundColor: "rgba(56, 13, 113, 0.85)" }}
        className="mt-6 p-4 rounded-xl relative"
      >
        <Text className="text-white font-medium text-xl">Packages</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5"
        >
          <View
            className="rounded-xl px-5 py-3 mr-4 w-36 relative overflow-hidden"
            style={{ backgroundColor: "rgba(27, 6, 55, 0.4)" }}
          >
            <Text className="text-center text-white text-lg font-light">
              Total
            </Text>
            <Text className="text-center text-white text-lg font-medium mt-2">{`${
              data!.packages.total
            }`}</Text>
            <View className="opacity-25 absolute rotate-45 bottom-0 right-0">
              <Ionicons name="grid" color="white" size={34} />
            </View>
          </View>
          <View
            className="rounded-xl px-5 py-3 mr-4 w-36 relative overflow-hidden"
            style={{ backgroundColor: "rgba(27, 6, 55, 0.4)" }}
          >
            <Text className="text-center text-white text-lg font-light">
              Delivered
            </Text>
            <Text className="text-center text-white text-lg font-medium mt-2">{`${
              data!.packages.delivered
            }`}</Text>
            <View className="opacity-25 absolute bottom-0 right-0">
              <Ionicons name="checkmark-done-outline" color="white" size={34} />
            </View>
          </View>
          <View
            className="rounded-xl px-5 py-3 mr-4 w-36 relative overflow-hidden"
            style={{ backgroundColor: "rgba(27, 6, 55, 0.4)" }}
          >
            <Text className="text-center text-white text-lg font-light">
              In our offices
            </Text>
            <Text className="text-center text-white text-lg font-medium mt-2">{`${
              data!.packages.confirmed
            }`}</Text>
            <View className="opacity-25 absolute rotate-12 bottom-0 right-0">
              <Ionicons name="flash" color="white" size={34} />
            </View>
          </View>
          <View
            className="rounded-xl px-5 py-3 mr-4 w-36 relative overflow-hidden"
            style={{ backgroundColor: "rgba(27, 6, 55, 0.4)" }}
          >
            <Text className="text-center text-white text-lg font-light">
              On Road
            </Text>
            <Text className="text-center text-white text-lg font-medium mt-2">{`${
              data!.packages.onRoad
            }`}</Text>
            <View className="opacity-25 absolute rotate-12 bottom-0 right-0">
              <Ionicons name="car" color="white" size={34} />
            </View>
          </View>
          <View
            className="rounded-xl px-5 py-3 mr-4 w-36 relative overflow-hidden"
            style={{ backgroundColor: "rgba(27, 6, 55, 0.4)" }}
          >
            <Text className="text-center text-white text-lg font-light">
              Returned
            </Text>
            <Text className="text-center text-white text-lg font-medium mt-2">{`${
              data!.packages.returned
            }`}</Text>
            <View className="opacity-25 absolute -rotate-[72deg] bottom-0 right-1">
              <Ionicons name="refresh" color="white" size={34} />
            </View>
          </View>
        </ScrollView>
        <View className="absolute top-1 left-1 opacity-10">
          <View className="rotate-45">
            <Ionicons name="cube-outline" color="white" size={56} />
          </View>
        </View>
      </View>
      <View className="mt-6 p-4 rounded-xl bg-neutral-200 shadow-md shadow-neutral-100 mb-14">
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
