import React, { useMemo, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "./ui/Input";
import { Link } from "expo-router";

const LoginForm = () => {
  const [pnum, setPnum] = useState<string>("");
  const isInValide: boolean = useMemo(() => {
    const regex = /^(\+213|0)(5|6|7)[0-9]{8}$/;
    return !regex.test(pnum);
  }, [pnum]);
  const googleLogo =
    require("@/assets/images/google-icon.png") as ImageSourcePropType;
  return (
    <View className="mt-6 flex-1">
      <View className="ml-2">
        <Input
          value={pnum}
          isInValide={pnum.length > 0 && isInValide}
          placeHolder="0X xx xx xx xx"
          setValue={setPnum}
          type="number"
        >
          <Ionicons name="call-outline" size={20} color="rgb(115 115 115)" />
        </Input>
      </View>
      <Text className="text-sm text-neutral-500 mt-2">
        Enter your phone to continue
      </Text>
      <View className="flex-1 justify-end">
        <Text className="text-sm text-neutral-500 mb-2">
          Don't have an account yet?{" "}
          <Link href="/(auth)/SignUp">
            <Text className="text-violet underline">Sign Up</Text>
          </Link>
        </Text>
        <Pressable className="bg-red items-center p-3 rounded-sm">
          <Text className="text-white">Let's Go</Text>
        </Pressable>
        {/* Or line */}
        <View className="flex-row items-center mt-2">
          <View className="flex-1 h-[1px] bg-neutral-500" />
          <Text className="text-neutral-500 px-2">Or</Text>
          <View className="flex-1 h-[1px] bg-neutral-500" />
        </View>
        {/* Social login links */}
        <View className="flex-row items-center justify-evenly mt-4">
          <Pressable className="rounded-full active:bg-neutral-200">
            <Image source={googleLogo} className="w-14 h-14" />
          </Pressable>
          <Pressable className="rounded-full active:bg-neutral-200">
            <Ionicons name="logo-facebook" size={56} color={"#4267B2"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
