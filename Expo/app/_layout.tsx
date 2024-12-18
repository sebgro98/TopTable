import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "../AuthProvider";
export default function RootLayout() {
  return (
    <AuthProvider>
      <GestureHandlerRootView>
        <Stack />
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
