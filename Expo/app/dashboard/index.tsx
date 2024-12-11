import React from "react";
import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseModel";
import { Link } from "expo-router";

export default function Dashboard() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Dashboard!</Text>
      <Button title="Log Out" onPress={handleLogout} />
      <Link href="/Match/MatchingPage" style={{ marginVertical: 10 }}>
        <Text style={{ color: "blue", fontSize: 18 }}>Go to Matching Page</Text>
      </Link>
      <Link href="/populate/TestFirestore" style={{ marginVertical: 10 }}>
        <Text style={{ color: "blue", fontSize: 18 }}>
          Go to Populate Firestore
        </Text>
      </Link>
    </View>
  );
}
