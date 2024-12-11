import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { signUp, logIn, checkUserExists } from "../../firebaseFunctions";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert(
        "Passwords do not match",
        "Please ensure both passwords are the same."
      );
      return;
    }

    try {
      const userCredential = await signUp(email, password);

      if (userCredential?.user) {
        router.push("/Auth/AuthScreen");
      }
    } catch (error: any) {
      Alert.alert("Sign Up Failed", error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      const userCredential = await logIn(email, password);
      const user = userCredential?.user;
      if (user) {
        const userExists = await checkUserExists(user.uid);
        if (userExists) {
          router.push("/dashboard");
        } else {
          router.push("/complete-profile");
        }
      }
    } catch (error: any) {
      Alert.alert("Log In Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? "Sign Up" : "Log In"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {isSignUp && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      )}

      <Button
        title={isSignUp ? "Sign Up" : "Log In"}
        onPress={isSignUp ? handleSignUp : handleLogIn}
      />

      <Button
        title={isSignUp ? "Switch to Log In" : "Switch to Sign Up"}
        onPress={() => setIsSignUp(!isSignUp)}
        color="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
});
