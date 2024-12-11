import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Welcome to TopTable
      </Text>
      <Link href="/Auth/AuthScreen" style={{ marginVertical: 10 }}>
        <Text style={{ color: "blue", fontSize: 18 }}>Go to Login Screen</Text>
      </Link>
      <Link href="/populate/TestFirestore" style={{ marginVertical: 10 }}>
        <Text style={{ color: "blue", fontSize: 18 }}>
          Go to Populate Firestore
        </Text>
      </Link>
    </View>
  );
}
