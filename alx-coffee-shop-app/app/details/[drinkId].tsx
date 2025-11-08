import { useMemo } from "react";
import { Dimensions, Image, Pressable, ScrollView, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

import { COFFEE_STORIES, FEATURED_DRINK, RECOMMENDED_DRINKS } from "@/src/constants/coffee";
import type { CoffeeDrink } from "@/src/types";

const { width } = Dimensions.get("window");

const DRINKS: CoffeeDrink[] = [FEATURED_DRINK, ...RECOMMENDED_DRINKS];

export default function DrinkDetailsScreen() {
  const { drinkId } = useLocalSearchParams<{ drinkId: string }>();
  const router = useRouter();

  const drink = useMemo(
    () => DRINKS.find((item) => item.id === drinkId) ?? FEATURED_DRINK,
    [drinkId]
  );

  return (
    <View className="flex-1 bg-[#F9F5F2]">
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView>
        <View className="relative">
          <Image source={{ uri: drink.image }} style={{ width, height: width * 1.1 }} />
          <View className="absolute inset-x-0 top-14 flex-row items-center justify-between px-6">
            <Pressable
              onPress={router.back}
              className="h-10 w-10 items-center justify-center rounded-full bg-black/30"
            >
              <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
            </Pressable>
            <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-black/30">
              <Feather name="heart" size={20} color="#FFFFFF" />
            </Pressable>
          </View>
        </View>

        <View className="-mt-8 rounded-t-3xl bg-white p-6">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-4">
              <Text className="text-3xl font-semibold text-[#2F2D2C]">{drink.name}</Text>
              <Text className="mt-2 text-sm text-[#7D7D7D]">{drink.description}</Text>
            </View>
            <View className="items-center">
              <View className="flex-row items-center gap-1 rounded-full bg-[#F9E4D8] px-3 py-1">
                <Feather name="star" size={16} color="#C67C4E" />
                <Text className="text-sm font-semibold text-[#C67C4E]">
                  {drink.rating.toFixed(1)}
                </Text>
              </View>
              <Text className="mt-1 text-xs text-[#7D7D7D]">{drink.votes} reviews</Text>
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-sm font-semibold text-[#2F2D2C]">Size</Text>
            <View className="mt-3 flex-row gap-3">
              {drink.sizes?.map((size) => (
                <Pressable
                  key={size}
                  className="min-w-[56px] items-center justify-center rounded-full border border-[#C67C4E] px-4 py-2"
                >
                  <Text className="text-sm font-semibold text-[#C67C4E]">{size}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-sm font-semibold text-[#2F2D2C]">Roastery notes</Text>
            <Text className="mt-2 text-sm leading-6 text-[#7D7D7D]">
              {COFFEE_STORIES[0].copy}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="flex-row items-center justify-between bg-white px-6 py-5">
        <View>
          <Text className="text-xs uppercase tracking-[2px] text-[#7D7D7D]">Price</Text>
          <Text className="text-2xl font-semibold text-[#2F2D2C]">
            ${drink.price.toFixed(2)}
          </Text>
        </View>
        <Pressable className="flex-1 flex-row items-center justify-center rounded-2xl bg-[#C67C4E] py-4">
          <Feather name="shopping-bag" size={18} color="#FFFFFF" />
          <Text className="ml-2 text-base font-semibold text-white">Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

