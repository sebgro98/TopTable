import Filter from "@/interfaces/Filter";
import Match from "@/interfaces/Match";
import { useState } from "react";
import { Button, FlatList, Switch, Text, TextInput, View } from "react-native";

export default function MatchingPage() {
  const [data, setData] = useState<Filter>({
    age: undefined,
    game: undefined,
    playAtHome: false,
  });
  const [matches, setMatches] = useState<Match[]>();

  const handleChange = <T extends string | boolean | number>(
    name: string,
    value: T
  ) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getMatches = async () => {
    console.log("Filter on: ", data);
    try {
      const response = await fetch(
        `http://localhost:3000/matches?age=${data.age}&game=${data.game}&playAtHome=${data.playAtHome}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      console.log("MATCHES: ", responseData);
      setMatches(responseData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Enter age"
        value={data.age?.toString() || ""}
        keyboardType="numeric"
        onChangeText={(value) => handleChange("age", value)}
      />

      <TextInput
        placeholder="Enter game"
        value={data.game}
        onChangeText={(value) => handleChange("game", value)}
      />

      <View>
        <Text>Play at home</Text>
        <Switch
          value={data.playAtHome}
          onValueChange={(value) => handleChange("playAtHome", value)}
        />
      </View>

      <Button
        title="Get matches"
        onPress={() => {
          getMatches();
        }}
      />

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Plays at home: {item.playAtHome ? "Y" : "N"}</Text>
          </View>
        )}
      />
    </View>
  );
}
