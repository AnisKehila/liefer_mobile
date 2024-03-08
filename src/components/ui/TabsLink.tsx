import React, { useEffect } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const TabsLink = ({
  icon,
  href,
  isActive,
}: {
  icon: string;
  href: string;
  isActive: boolean;
}) => {
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = isActive ? -20 : 0;
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateX.value) }],
    };
  });

  return (
    <Link href={href} className={`flex-1 text-center`}>
      <Animated.View
        style={[animatedStyle]}
        className={`p-5 rounded-full ${isActive ? "bg-neutral-100" : ""}`}
      >
        <Ionicons name={isActive ? icon : icon + "-outline"} size={30} />
      </Animated.View>
    </Link>
  );
};

export default TabsLink;
