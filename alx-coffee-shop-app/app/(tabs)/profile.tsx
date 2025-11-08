import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const MENU_ITEMS = [
  { icon: "account-circle-outline", label: "Account details", description: "Update your contact information" },
  { icon: "ticket-percent-outline", label: "Rewards", description: "153 beans available" },
  { icon: "map-marker-radius-outline", label: "Delivery addresses", description: "Manage saved locations" },
  { icon: "shield-lock-outline", label: "Security", description: "Biometrics, passcode, backup codes" },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F9F5F2]">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 60 }}>
        <Text className="mt-4 text-3xl font-semibold text-[#2F2D2C]">Profile</Text>

        <View className="mt-6 flex-row items-center justify-between rounded-3xl bg-[#C67C4E] p-5">
          <View className="flex-row items-center gap-4">
            <Image
              source={require("@/assets/images/user-image.png")}
              className="h-14 w-14 rounded-full"
            />
            <View>
              <Text className="text-lg font-semibold text-white">Ama Boateng</Text>
              <Text className="text-xs text-white/80">Gold member · since 2021</Text>
            </View>
          </View>
          <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <Feather name="edit-3" size={20} color="#FFFFFF" />
          </Pressable>
        </View>

        <View className="mt-6 rounded-3xl bg-white p-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-semibold text-[#2F2D2C]">Coffee wallet</Text>
            <Pressable className="flex-row items-center gap-1">
              <Text className="text-sm font-semibold text-[#C67C4E]">Top up</Text>
              <Feather name="plus-circle" size={16} color="#C67C4E" />
            </Pressable>
          </View>
          <Text className="mt-2 text-3xl font-bold text-[#2F2D2C]">₵235.40</Text>
          <View className="mt-4 flex-row items-center gap-3">
            <View className="rounded-full bg-[#F9E4D8] px-3 py-1">
              <Text className="text-xs font-semibold text-[#C67C4E]">153 beans</Text>
            </View>
            <Text className="text-xs text-[#7D7D7D]">Redeem for free drinks and bakery items.</Text>
          </View>
        </View>

        <View className="mt-6 gap-3">
          {MENU_ITEMS.map((item) => (
            <Pressable
              key={item.label}
              className="flex-row items-center justify-between rounded-2xl bg-white px-5 py-4"
            >
              <View className="flex-row items-center gap-4">
                <View className="h-12 w-12 items-center justify-center rounded-full bg-[#F9E4D8]">
                  <MaterialCommunityIcons name={item.icon as any} size={24} color="#C67C4E" />
                </View>
                <View>
                  <Text className="text-base font-semibold text-[#2F2D2C]">{item.label}</Text>
                  <Text className="text-xs text-[#7D7D7D]">{item.description}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#C67C4E" />
            </Pressable>
          ))}
        </View>

        <Pressable className="mt-8 flex-row items-center justify-center rounded-2xl border border-[#C67C4E] py-4">
          <Feather name="log-out" size={18} color="#C67C4E" />
          <Text className="ml-2 text-base font-semibold text-[#C67C4E]">Log out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}