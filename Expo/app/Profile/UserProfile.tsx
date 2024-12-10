//This component can be used both as a card when swiping and as the view for a user's profile
//(When a user clicks to edit their profile, it can be the same as page as when registering)

import User from "@/interfaces/User";
import { Text, View } from "react-native";

export default function UserProfile({ user }: { user: User }) {
  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
      {/* <Text>Games: {user.games}</Text> */}
      <Text>Plays at home: {user.playAtHome ? "Y" : "N"}</Text>
      <Text>Plays in public: {user.playInPublic ? "Y" : "N"}</Text>
    </View>
  );
}