import User from "@/interfaces/User";
import { Button, View } from "react-native";
import { useState } from "react";
import MatchFrame from "./MatchFrame";
import Group from "@/interfaces/Group";

export default function MatchCollection({ matches }: { matches: User[] | Group[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
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
      {matches.length > 0 && (
        <>
          <MatchFrame match={matches[currentIndex]} />

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Button
              title="Previous"
              onPress={handlePrevious}
              disabled={currentIndex === 0}
            />
            <Button
              title="Next"
              onPress={handleNext}
              disabled={currentIndex === matches.length - 1}
            />
          </View>
        </>
      )}
    </View>
  );
}
