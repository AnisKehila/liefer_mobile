import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Input from "./ui/Input";
import { Ionicons } from "@expo/vector-icons";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <View className="flex-1 mt-6">
      <View className="ml-1">
        <Text className="text-lg font-medium">Name</Text>
        <Input
          placeHolder="What's do we call you?"
          value={name}
          setValue={setName}
        >
          <Ionicons name="person-circle-outline" size={20} />
        </Input>
      </View>
      <View className="ml-1 mt-6">
        <Text className="text-lg font-medium">Email</Text>
        <Input placeHolder="lorem@ipsum.com" value={email} setValue={setEmail}>
          <Ionicons name="mail-outline" size={20} />
        </Input>
      </View>
      <View className="ml-1 mt-6">
        <Text className="text-lg font-medium">Phone number</Text>
        <Input
          placeHolder="0X xx xx xx xx"
          value={phone}
          setValue={setPhone}
          type="number"
        >
          <Ionicons name="call-outline" size={20} />
        </Input>
      </View>
      <View className="ml-1 mt-6">
        <Text className="text-lg font-medium">Password</Text>
        <Input
          placeHolder="GUdm7euCxgA"
          value={password}
          setValue={setPassword}
          type={passwordShown ? "text" : "password"}
        >
          <Ionicons
            name={passwordShown ? "eye-off-outline" : "eye-outline"}
            size={20}
            onPress={() => setPasswordShown(!passwordShown)}
          />
        </Input>
      </View>
      <Pressable className="bg-red items-center p-4 rounded-sm mt-auto active:bg-rose-700">
        <Text className="text-white font-medium">Let's Go</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
