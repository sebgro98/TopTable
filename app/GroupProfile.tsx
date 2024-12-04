//This component can be used both as a card when swiping and as the view for a group's profile
//(When a group clicks to edit their profile, it can be the same as page as when creating new group)

import Group from "@/interfaces/Group";
import { Text, View } from "react-native";

export default function GroupProfile({ group }: { group: Group }) {
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
      <Text>Name: {group.name}</Text>
      <Text>Member count: {group.members.length}</Text>
      <Text>Game: {group.game}</Text>
      <Text>Plays at home: {group.playAtHome ? "Y" : "N"}</Text>
    </View>
  );
}