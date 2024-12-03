//This component can be used both as a card when swiping and as the view for a user's profile
//(When a user clicks to edit their profile, it can be the same as page as when registering)

import User from "@/interfaces/User";
import { Text, View } from "react-native";

export default function UserProfile({ user }: { user: User }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: 350,
        height: 450,
      }}
    >
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
      <Text>Game: {user.game}</Text>
      <Text>Plays at home: {user.playAtHome ? "Y" : "N"}</Text>
    </View>
  );
}