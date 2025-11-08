import { Pressable, Text } from "react-native";

import type { CoffeeCategory } from "@/src/types";

type Props = {
  category: CoffeeCategory;
  isActive?: boolean;
  onPress?: (category: CoffeeCategory) => void;
};

export function CategoryPill({ category, isActive = false, onPress }: Props) {
  return (
    <Pressable
      onPress={() => onPress?.(category)}
      className={`mr-3 rounded-full border px-5 py-2 ${
        isActive ? "border-[#C67C4E] bg-[#C67C4E]" : "border-[#E2E2E2] bg-white"
      }`}
    >
      <Text
        className={`text-sm font-semibold ${isActive ? "text-white" : "text-[#6F6F6F]"}`}
      >
        {category.label}
      </Text>
    </Pressable>
  );
}

