import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";

type AvatarProps = {
  source?: string;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({ source, size = 12 }) => {
  return (
    <Image
      source={{
        uri:
          source ||
          "https://avatars.githubusercontent.com/u/87645012?s=400&u=8166aad798efaa5449b92274f961a68df83e1a31&v=4",
      }}
      className={`w-${size} h-${size} rounded-2xl`}
    />
  );
};

export default Avatar;
