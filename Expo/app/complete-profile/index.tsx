import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { saveUserProfile } from "../../firebaseFunctions";
import { useRouter } from "expo-router";
import { auth } from "../../firebaseModel";

export default function CompleteProfileScreen() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const router = useRouter();

  const handleSaveProfile = async () => {
    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Error", "No, authenticated user found.");
      return;
    }
    try {
      await saveUserProfile(user.uid, {
        username,
        age: parseInt(age, 10),
        type: "u",
        bio: "", // Empty string for now
        games: [], // Empty array for now
        playAtHome: false, // Default to false
        playInPublic: false, // Default to false
        friendsList: [], // Empty array for now
      });

      Alert.alert("Success", "Your profile has been saved.");
      router.push("/dashboard");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
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
