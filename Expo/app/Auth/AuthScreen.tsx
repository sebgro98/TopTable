import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { signUp, logIn } from "../../firebaseFunctions"; // Replace with your functions
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      // Attempt to sign up
      const userCredential = await signUp(email, password);

      // If successful, navigate to the dashboard
      if (userCredential?.user) {
        router.push("/dashboard");
      }
    } catch (error: any) {
      // Display error message in an alert
      Alert.alert("Sign Up Failed", error.message);
    }
  };

  const handleLogIn = async () => {
    try {
      // Attempt to log in
      const userCredential = await logIn(email, password);

      // If successful, navigate to the dashboard
      if (userCredential?.user) {
        router.push("/dashboard");
      }
    } catch (error: any) {
      // Display error message in an alert
      Alert.alert("Log In Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Log In" onPress={handleLogIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
});
