import { View, TextInput } from "react-native";
import React, { useState } from "react";

const Input = ({
  children,
  isDisabled = false,
  isInValide = false,
  value,
  setValue,
  placeHolder,
  type = "text",
}: {
  children?: React.ReactElement;
  isDisabled?: boolean;
  isInValide?: boolean;
  type?: "text" | "password";
  value: string;
  placeHolder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      className={`items-center flex-row border-b justify-between gap-2 border-neutral-500 
        ${isFocused ? "border-indigo" : ""}
        ${isInValide ? "border-red" : ""} 
        ${isDisabled ? "border-neutral-300" : ""}
      `}
    >
      <TextInput
        className="flex-1 text-lg"
        placeholder={placeHolder}
        value={value}
        onChangeText={setValue}
        editable={!isDisabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password"}
      />
      {children}
    </View>
  );
};

export default Input;
