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
import { Link } from "expo-router";

import { styles } from "../styles/_joinstyle";

type SignInFormState = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [form, setForm] = useState<SignInFormState>({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (key: keyof SignInFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSignIn = () => {
    // Placeholder action until authentication is wired up.
    // eslint-disable-next-line no-console
    console.log("Sign in form submitted", form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Welcome back</Text>
          <Text style={styles.subText}>
            Sign in to pick up where you left off and continue your learning
            journey.
          </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              value={form.email}
              onChangeText={(value) => handleChange("email", value)}
              placeholder="you@example.com"
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
                placeholder="Enter your password"
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
            <TouchableOpacity accessibilityRole="button">
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleSignIn}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or sign in with</Text>
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
        <Text style={styles.signupTitleText}>New here? </Text>
        <Link href="/join">
          <Text style={styles.signupSubTitleText}>Create an account</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

