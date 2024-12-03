import User from "@/interfaces/User";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserProfile from "./UserProfile";

export default function MatchFrame({ user }: { user: User }) {
  const addFriend = () => {
    console.log("Adding user/group to wish list: ", user.name);
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
      <UserProfile user={user}/>

      <View
      style={{
        alignItems: "center",
      }}>
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
