import React from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    router.replace("/login");
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
