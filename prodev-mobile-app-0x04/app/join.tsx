import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";

import { styles } from "../styles/_joinstyle";

type JoinFormState = {
  fullName: string;
  email: string;
  password: string;
};

export default function Join() {
  const router = useRouter();
  const [form, setForm] = useState<JoinFormState>({
    fullName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (key: keyof JoinFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleContinue = () => {
    // Placeholder action until backend integration exists.
    // eslint-disable-next-line no-console
    console.log("Join form submitted", form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.iconsection}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={() => router.back()}
          >
            <Image source={require("../assets/images/icon.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Help"
          >
            <Text>Help</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Join Us</Text>
          <Text style={styles.subText}>
            Create your account to start exploring professional development
            resources curated for you.
          </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Full Name</Text>
            <TextInput
              value={form.fullName}
              onChangeText={(value) => handleChange("fullName", value)}
              placeholder="Jane Doe"
              style={styles.formControl}
              autoCapitalize="words"
              textContentType="name"
              returnKeyType="next"
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              value={form.email}
              onChangeText={(value) => handleChange("email", value)}
              placeholder="jane@example.com"
              style={styles.formControl}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              returnKeyType="next"
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                value={form.password}
                onChangeText={(value) => handleChange("password", value)}
                placeholder="Enter a secure password"
                style={styles.passwordControl}
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
                textContentType="password"
                returnKeyType="done"
              />
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
                onPress={() => setIsPasswordVisible((prev) => !prev)}
              >
                <Text>{isPasswordVisible ? "Hide" : "Show"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleContinue}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity
            style={styles.secondaryButton}
            accessibilityRole="button"
          >
            <Image source={require("../assets/images/google.png")} />
            <Text style={styles.secondaryButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            accessibilityRole="button"
          >
            <Image source={require("../assets/images/facebook.png")} />
            <Text style={styles.secondaryButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin">
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

