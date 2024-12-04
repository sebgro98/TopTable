import Filter from "@/interfaces/Filter";
import { Switch, TextInput, View, Text } from "react-native";

export default function FilterOptions({ filterData, setFilterData }: { filterData: Filter; setFilterData: React.Dispatch<React.SetStateAction<Filter>> }) {
  
  const handleChange = <T extends string | boolean | number>(
    name: string,
    value: T
  ) => {
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <TextInput
        placeholder="Enter min age"
        value={filterData.ageMin?.toString() || ""}
        keyboardType="numeric"
        onChangeText={(value) => handleChange("ageMin", value)}
      />

      <TextInput
        placeholder="Enter max age"
        value={filterData.ageMax?.toString() || ""}
        keyboardType="numeric"
        onChangeText={(value) => handleChange("ageMax", value)}
      />

      <TextInput
        placeholder="Enter game title"
        value={filterData.gameTitle || ""}
        onChangeText={(value) => handleChange("gameTitle", value)}
      />

      <View>
        <Text>Play at home</Text>
        <Switch
          value={filterData.playAtHome}
          onValueChange={(value) => handleChange("playAtHome", value)}
        />
      </View>

      <View>
        <Text>Play in public</Text>
        <Switch
          value={filterData.playInPublic}
          onValueChange={(value) => handleChange("playInPublic", value)}
        />
      </View>
    </>
  );
}
