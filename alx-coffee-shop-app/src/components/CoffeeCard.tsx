import { Image, Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import type { CoffeeDrink } from "@/src/types";

type CoffeeCardProps = {
  drink: CoffeeDrink;
  variant?: "primary" | "compact";
  onPress?: (drink: CoffeeDrink) => void;
};

export function CoffeeCard({ drink, variant = "primary", onPress }: CoffeeCardProps) {
  const isCompact = variant === "compact";

  return (
    <Pressable
      className={`rounded-3xl bg-white ${isCompact ? "w-[180px]" : "w-[220px]"} shadow-sm`}
      style={{ elevation: 4 }}
      onPress={() => onPress?.(drink)}
    >
      <View className="relative overflow-hidden rounded-3xl">
        <Image
          source={{ uri: drink.image }}
          className={`w-full ${isCompact ? "h-[140px]" : "h-[160px]"}`}
        />
        <View className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1">
          <Text className="text-xs font-semibold text-[#C67C4E]">
            {drink.tags?.[0] ?? "Signature"}
          </Text>
        </View>
      </View>

      <View className="gap-2 p-4">
        <View className="flex-row items-start justify-between">
          <Text className="flex-1 text-base font-semibold text-[#2F2D2C]">
            {drink.name}
          </Text>
          <View className="flex-row items-center gap-1">
            <Feather name="star" size={16} color="#F59E0B" />
            <Text className="text-sm font-semibold text-[#2F2D2C]">
              {drink.rating.toFixed(1)}
            </Text>
          </View>
        </View>

        <Text className="text-xs text-[#7D7D7D]" numberOfLines={2}>
          {drink.description}
        </Text>

        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold text-[#C67C4E]">${drink.price.toFixed(2)}</Text>
          <Pressable className="rounded-full bg-[#C67C4E] p-2">
            <Feather name="plus" size={18} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

