import User from "@/interfaces/User";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserProfile from "../Profile/UserProfile";
import Group from "@/interfaces/Group";
import GroupProfile from "../Profile/GroupProfile";

export default function MatchFrame({ match }: { match: User | Group }) {
  const addToWishlist = () => {
    console.log("Adding user/group to wishlist: ", match.username);
  };

  const rejectMatch = () => {
    console.log("Rejecting user/group: ", match.username);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {match.type === "u" ? (
          <UserProfile user={match} />
        ) : (
          <GroupProfile group={match} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={rejectMatch}
        >
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.addButton]}
          onPress={addToWishlist}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  profileContainer: {
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: 350,
    height: 450,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "lightgreen",
  },
  rejectButton: {
    backgroundColor: "lightcoral",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
