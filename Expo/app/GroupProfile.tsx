//This component can be used both as a card when swiping and as the view for a group's profile
//(When a group admin clicks to edit the group profile, it can be the same as page as when creating new group)

import Group from "@/interfaces/Group";
import { Text, View } from "react-native";

export default function GroupProfile({ group }: { group: Group }) {
  return (
    <View>
      <Text>Name: {group.name}</Text>
      <Text>Admin: {group.admin.name}</Text>
      <Text>Member count: {group.members.length}</Text>
      {/* <Text>Game: {group.game}</Text> */}
      <Text>Plays at home: {group.playAtHome ? "Y" : "N"}</Text>
    </View>
  );
}