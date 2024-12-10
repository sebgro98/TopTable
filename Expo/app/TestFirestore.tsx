import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseModel";
import { View, Text } from "react-native";
import games from "./games.json";

export default function TestFirestore() {

  useEffect(() => {
    async function addGamesToFirestore() {
      try {
        const gamesCollection = collection(db, "games");
        for (const game of games) {
          await addDoc(gamesCollection, game);
        }
        console.log("Games successfully added!");
      } catch (error) {
        console.error("Error adding games: ", error);
      }
    }

    addGamesToFirestore();
  }, []);

  return (
    <View>
    <Text>Firestore Test: Check Console for Results</Text>
  </View>
);
}
