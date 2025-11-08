import { ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { CoffeeCard } from "@/src/components/CoffeeCard";
import { SectionHeader } from "@/src/components/SectionHeader";
import { RECOMMENDED_DRINKS } from "@/src/constants/coffee";

export default function FavoritesScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-[#F9F5F2]" contentContainerStyle={{ padding: 20 }}>
      <Text className="mt-10 text-3xl font-semibold text-[#2F2D2C]">Your favorites</Text>
      <Text className="mt-2 text-sm text-[#7D7D7D]">
        Saved coffees you order most frequently. Tap the plus button to add them to your cart.
      </Text>

      <SectionHeader title="Pinned" actionLabel="Manage" />

      <View className="gap-4">
        {RECOMMENDED_DRINKS.map((drink) => (
          <CoffeeCard
            key={drink.id}
            drink={drink}
            variant="compact"
            onPress={(item) => router.push(`/details/${item.id}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}