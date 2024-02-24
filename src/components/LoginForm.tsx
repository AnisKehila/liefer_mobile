import React, { useState } from "react";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "./ui/Input";

const PhoneForm = ({ isDisabled }: { isDisabled: boolean }) => {
  const [pnum, setPnum] = useState("");
  return (
    <View>
      <View className="ml-2">
        <Input value={pnum} placeHolder="0X xx xx xx xx" setValue={setPnum}>
          <Ionicons name="call-outline" size={20} color="rgb(115 115 115)" />
        </Input>
      </View>
      <Text className="text-sm text-neutral-500 ml-auto">
        Your phone number.
      </Text>
    </View>
  );
};

const LoginForm = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("phone");
  return loginMethod === "phone" ? <PhoneForm isDisabled={false} /> : <></>;
};

export default LoginForm;
