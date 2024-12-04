import Filter from "@/interfaces/Filter";
import User from "@/interfaces/User";
import { useEffect, useState } from "react";
import { Button, Switch, Text, TextInput, View } from "react-native";
import Request from "../requests/Request";
import MatchCollection from "./MatchCollection";
import matchesData from "../db.json";
import Group from "@/interfaces/Group";

export default function MatchingPage() {
  const [data, setData] = useState<Filter>({
    age: undefined,
    game: undefined,
    playAtHome: false,
  });
  const [matches, setMatches] = useState<User[] | Group[]>();
  const [viewOptions, setViewOptions] = useState<boolean>(false);

  useEffect(() => {
    getMatches();
  }, []);

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

    // const responseData = await Request(
    //   "matches",
    //   "GET",
    //   data
    // );
    // setMatches(responseData);

    setMatches(matchesData.matches);
    setViewOptions(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {viewOptions ? (
        <>
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

          <Button
            title="Hide"
            onPress={() => {
              setViewOptions(false);
            }}
          />
        </>
      ) : (
        <Button
          title="Options"
          onPress={() => {
            setViewOptions(true);
          }}
        />
      )}

      <MatchCollection matches={matches || []} />
    </View>
  );
}
