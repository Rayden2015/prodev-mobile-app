import { ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { SectionHeader } from "@/src/components/SectionHeader";
import { COFFEE_STORIES } from "@/src/constants/coffee";

export default function OrdersScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F9F5F2]" contentContainerStyle={{ padding: 20 }}>
      <Text className="mt-10 text-3xl font-semibold text-[#2F2D2C]">Order history</Text>
      <Text className="mt-2 text-sm text-[#7D7D7D]">
        Track your recent pickups and deliveries. Reorder your favorites in seconds.
      </Text>

      <SectionHeader title="This week" actionLabel="Download" />

      <View className="gap-4">
        {COFFEE_STORIES.map((story) => (
          <View key={story.id} className="flex-row items-center justify-between rounded-2xl bg-white p-4">
            <View className="flex-1 pr-4">
              <Text className="text-base font-semibold text-[#2F2D2C]">{story.headline}</Text>
              <Text className="mt-1 text-xs text-[#7D7D7D]" numberOfLines={2}>
                {story.copy}
              </Text>
            </View>
            <View className="items-center gap-2">
              <Text className="text-sm font-semibold text-[#C67C4E]">Completed</Text>
              <Feather name="chevron-right" size={20} color="#C67C4E" />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}