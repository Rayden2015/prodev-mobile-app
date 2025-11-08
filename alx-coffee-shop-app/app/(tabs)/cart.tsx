import { Pressable, ScrollView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { CoffeeCard } from "@/src/components/CoffeeCard";
import { RECOMMENDED_DRINKS } from "@/src/constants/coffee";

export default function CartScreen() {
  const router = useRouter();
  const cartItems = RECOMMENDED_DRINKS.slice(0, 2);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View className="flex-1 bg-[#F9F5F2]">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 160 }}>
        <Text className="mt-10 text-3xl font-semibold text-[#2F2D2C]">Your cart</Text>
        <Text className="mt-2 text-sm text-[#7D7D7D]">
          Review your selection and adjust sizes or quantities before checkout.
        </Text>

        <View className="mt-6 gap-4">
          {cartItems.map((drink) => (
            <CoffeeCard
              key={drink.id}
              drink={drink}
              variant="compact"
              onPress={(item) => router.push(`/details/${item.id}`)}
            />
          ))}
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white p-6 shadow-lg">
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-base text-[#7D7D7D]">Subtotal</Text>
          <Text className="text-xl font-semibold text-[#2F2D2C]">
            ${subtotal.toFixed(2)}
          </Text>
        </View>
        <Pressable className="flex-row items-center justify-center rounded-2xl bg-[#C67C4E] py-4">
          <Feather name="credit-card" size={18} color="#FFFFFF" />
          <Text className="ml-2 text-base font-semibold text-white">Proceed to checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}