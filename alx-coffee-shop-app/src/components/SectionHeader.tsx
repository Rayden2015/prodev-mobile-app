import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export function SectionHeader({ title, actionLabel = "See all", onPressAction }: Props) {
  return (
    <View className="mb-4 mt-6 flex-row items-center justify-between">
      <Text className="text-lg font-semibold text-[#2F2D2C]">{title}</Text>
      <Pressable onPress={onPressAction}>
        <Text className="text-sm font-semibold text-[#C67C4E]">{actionLabel}</Text>
      </Pressable>
    </View>
  );
}

