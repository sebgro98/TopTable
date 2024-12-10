import { Text, View } from "react-native";
import { Link } from "expo-router";
import TestFirestore from "./TestFirestore";
export default function Index() {
  return (
  
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Link href="./Match/MatchingPage">
        <Text style={{ color: "blue" }}>Go to Matching Page</Text>
      </Link>
    </View>
  );
}
