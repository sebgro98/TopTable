import React, { useState } from "react";
import User from "@/interfaces/User";
import Group from "@/interfaces/Group";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import MatchFrame from "./MatchFrame";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  withTiming,
} from "react-native-reanimated";

const SWIPE_THRESHOLD = 0.25 * 300; // Adjust to fit your card width

export default function MatchCollection({ matches }: { matches: User[] | Group[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const handleSwipeComplete = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? currentIndex + 1
        : currentIndex - 1;

    if (newIndex >= 0 && newIndex < matches.length) {
      setCurrentIndex(newIndex);
    }

    translateX.value = withTiming(0, { duration: 300 });
    translateY.value = withTiming(0, { duration: 300 });
  };

  const addToWishlist = () => {
    console.log("Adding user/group to wishlist: ", matches[currentIndex].name);
  };

  const rejectMatch = () => {
    console.log("Rejecting user/group: ", matches[currentIndex].name);
  };

  const gestureHandler = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
        const direction = translateX.value > 0 ? "right" : "left";
        runOnJS(handleSwipeComplete)(direction);
      } else {
        translateX.value = withTiming(0, { duration: 300 });
        translateY.value = withTiming(0, { duration: 300 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${(translateX.value / 300) * 15}deg` }, // Adjust rotation scale
    ],
  }));

  return (
    <View style={styles.container}>
      {matches.length > 0 && (
        <>
          <GestureDetector gesture={gestureHandler}>
            <Animated.View style={animatedStyle}>
              <MatchFrame match={matches[currentIndex]} />
            </Animated.View>
          </GestureDetector>
          <View style={styles.buttonContainer}>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
