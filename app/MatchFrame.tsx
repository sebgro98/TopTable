import User from "@/interfaces/User";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserProfile from "./UserProfile";
import Group from "@/interfaces/Group";
import GroupProfile from "./GroupProfile";

export default function MatchFrame({ match }: { match: User | Group }) {
  const addFriend = () => {
    console.log("Adding user/group to wish list: ", match.name);
  };

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
      {match.type === "u" ? (
        <UserProfile user={match} />
      ) : (
        <GroupProfile group={match} />
      )}

      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.button} onPress={() => addFriend()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgreen",
    width: 70,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
