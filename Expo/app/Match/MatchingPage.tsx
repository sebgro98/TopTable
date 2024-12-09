import Filter from "@/interfaces/Filter";
import User from "@/interfaces/User";
import { useEffect, useState } from "react";
import { Button, View, TouchableOpacity, Text } from "react-native";
import Request from "../../requests/Request";
import MatchCollection from "./MatchCollection";
import matchesData from "../../db.json";
import Group from "@/interfaces/Group";
import FilterOptions from "./FilterOptions";
import { stylesActive, stylesDormant } from "@/styles/matchSwitchBtn";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MatchingPage() {
  const [matches, setMatches] = useState<User[] | Group[]>();
  const [userMatch, setUserMatch] = useState<boolean>(true);
  const [viewFilterOptions, setViewFilterOptions] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<Filter>({
    ageMin: undefined,
    ageMax: undefined,
    gameTitle: undefined,
    playAtHome: false,
    playInPublic: false,
  });

  useEffect(() => {
    getMatches();
  }, [userMatch]);

  const getMatches = async () => {
    // console.log("Filter on: ", filterData);

    // const url = userMatch ? "user/filter" : "group/filter";
    // const responseData = await Request(
    //   url,
    //   "GET",
    //   filterData
    // );
    // setMatches(responseData);

    setMatches(
      userMatch
        ? (matchesData.users as User[])
        : (matchesData.groups as Group[])
    );
    setViewFilterOptions(false);
  };

  //Fetch user matches
  const userOptions = () => {
    if (!userMatch) {
      setUserMatch(true);
    }
  };

  //Fetch group matches
  const groupOptions = () => {
    if (userMatch) {
      setUserMatch(false);
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
      {viewFilterOptions ? (
        <>
          <FilterOptions
            filterData={filterData}
            setFilterData={setFilterData}
          />

          <Button
            title="Get matches"
            onPress={() => {
              getMatches();
            }}
          />
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              setViewFilterOptions(true);
            }}
            style={{ marginTop: 15, marginLeft: 350 }}
          >
            <Text>
              <Icon name="cog" size={28} color="black" />
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              margin: 20,
            }}
          >
            <TouchableOpacity
              style={[userMatch ? stylesActive.button : stylesDormant.button]}
              onPress={() => userOptions()}
            >
              <Text
                style={
                  userMatch ? stylesActive.buttonText : stylesDormant.buttonText
                }
              >
                Users
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[userMatch ? stylesDormant.button : stylesActive.button]}
              onPress={() => groupOptions()}
            >
              <Text
                style={
                  userMatch ? stylesDormant.buttonText : stylesActive.buttonText
                }
              >
                Groups
              </Text>
            </TouchableOpacity>
          </View>

          <MatchCollection matches={matches || []} />
        </>
      )}
    </View>
  );
}
