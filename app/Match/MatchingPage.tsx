import Filter from "@/interfaces/Filter";
import User from "@/interfaces/User";
import { useEffect, useState } from "react";
import { Button, View } from "react-native";
import Request from "../../requests/Request";
import MatchCollection from "./MatchCollection";
import matchesData from "../../db.json";
import Group from "@/interfaces/Group";
import FilterOptions from "./FilterOptions";

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
  }, []);

  const getMatches = async () => {
    console.log("Filter on: ", filterData);

    // const url = userMatch ? "user/filter" : "group/filter";
    // const responseData = await Request(
    //   url,
    //   "GET",
    //   filterData
    // );
    // setMatches(responseData);

    setMatches(userMatch ? (matchesData.users as User[]) : (matchesData.groups as Group[]));
    setViewFilterOptions(false);
  };

  //Fetch user matches
  const userOptions = () => {
    if (!userMatch) {
      setUserMatch(true);
      getMatches();
    }
  };

  //Fetch group matches
  const groupOptions = () => {
    if (userMatch) {
      setUserMatch(false);
      getMatches();
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
      <View>
        <Button
          title="Users"
          onPress={() => {
            userOptions();
          }}
        />

        <Button
          title="Groups"
          onPress={() => {
            groupOptions();
          }}
        />
      </View>

      {viewFilterOptions ? (
        <>
          <FilterOptions filterData={filterData} setFilterData={setFilterData} />

          <Button
            title="Get matches"
            onPress={() => {
              getMatches();
            }}
          />
        </>
      ) : (
        <Button
          title="Filters"
          onPress={() => {
            setViewFilterOptions(true);
          }}
        />
      )}

      <MatchCollection matches={matches || []} />
    </View>
  );
}
