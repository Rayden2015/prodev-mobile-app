import { Pressable, Text, View } from "react-native";

import type { CoffeeStory } from "@/src/types";

type Props = {
  story: CoffeeStory;
};

export function StoryCard({ story }: Props) {
  return (
    <Pressable className="mr-4 w-[220px] rounded-3xl bg-[#2F2D2C] p-5">
      <Text className="text-xs uppercase tracking-[2px] text-[#C67C4E]">
        {story.headline}
      </Text>
      <Text className="mt-3 text-base font-semibold text-white" numberOfLines={3}>
        {story.copy}
      </Text>
      <View className="mt-6 rounded-full bg-[#C67C4E]/20 px-4 py-2">
        <Text className="text-center text-xs font-semibold text-[#C67C4E]">
          Learn More
        </Text>
      </View>
    </Pressable>
  );
}

