import { useState } from "react";
import { ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { CategoryPill } from "@/src/components/CategoryPill";
import { CoffeeCard } from "@/src/components/CoffeeCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { StoryCard } from "@/src/components/StoryCard";
import {
  COFFEE_CATEGORIES,
  COFFEE_STORIES,
  FEATURED_DRINK,
  RECOMMENDED_DRINKS,
} from "@/src/constants/coffee";

import type { CoffeeCategory } from "@/src/types";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<CoffeeCategory>(COFFEE_CATEGORIES[0]);
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-[#F9F5F2]" showsVerticalScrollIndicator={false}>
      <View className="px-5 pt-14 pb-32">
        <View className="mb-6 flex-row items-center justify-between">
          <View>
            <Text className="text-xs uppercase tracking-[3px] text-[#9E9E9E]">Location</Text>
            <Text className="text-lg font-semibold text-[#2F2D2C]">Accra, Ghana</Text>
          </View>
          <View className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
            <Ionicons name="notifications-outline" size={20} color="#2F2D2C" />
          </View>
        </View>

        <View className="mb-6 rounded-3xl bg-white p-4 shadow-sm" style={{ elevation: 4 }}>
          <View className="flex-row items-center rounded-2xl bg-[#F3F3F3] px-4 py-3">
            <Feather name="search" size={20} color="#9E9E9E" />
            <TextInput
              placeholder="Search coffee, beans, desserts"
              placeholderTextColor="#9E9E9E"
              className="ml-3 flex-1 text-base text-[#2F2D2C]"
            />
            <View className="ml-3 h-10 w-10 items-center justify-center rounded-2xl bg-[#C67C4E]">
              <Feather name="sliders" size={18} color="#FFFFFF" />
          </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
            {COFFEE_CATEGORIES.map((category) => (
              <CategoryPill
                key={category.id}
                category={category}
                isActive={category.id === activeCategory.id}
                onPress={setActiveCategory}
              />
            ))}
          </ScrollView>
      </View>

        <ImageBackground
          source={{ uri: FEATURED_DRINK.image }}
          imageStyle={{ borderRadius: 28 }}
          className="overflow-hidden rounded-[28px]"
        >
          <View className="h-[220px] justify-between bg-black/30 p-6">
            <View className="self-start rounded-full bg-white/85 px-3 py-1">
              <Text className="text-xs font-semibold uppercase text-[#C67C4E]">
                House Special
              </Text>
            </View>
            <View className="gap-2">
              <Text className="text-2xl font-semibold text-white">{FEATURED_DRINK.name}</Text>
              <Text className="text-sm text-white/80" numberOfLines={2}>
                {FEATURED_DRINK.description}
              </Text>
              <View className="mt-3 flex-row items-center gap-3">
                <View className="flex-row items-center gap-1 rounded-full bg-white/90 px-3 py-1">
                  <Feather name="star" size={16} color="#F59E0B" />
                  <Text className="text-xs font-semibold text-[#2F2D2C]">
                    {FEATURED_DRINK.rating.toFixed(1)} ({FEATURED_DRINK.votes})
                  </Text>
                </View>
                <View className="rounded-full bg-[#C67C4E] px-4 py-1">
                  <Text className="text-xs font-semibold text-white">
                    From ${FEATURED_DRINK.price.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <SectionHeader title="Recommended for you" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-ml-2">
          <View className="flex-row gap-4 pl-2">
            {RECOMMENDED_DRINKS.map((drink) => (
              <CoffeeCard
                key={drink.id}
                drink={drink}
                variant="primary"
                onPress={(item) => router.push(`/details/${item.id}`)}
              />
            ))}
          </View>
        </ScrollView>

        <SectionHeader title="Stories from the house" actionLabel="Read" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-ml-1">
          <View className="flex-row pl-1">
            {COFFEE_STORIES.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </View>
        </ScrollView>
        </View>
      </ScrollView>
  );
}