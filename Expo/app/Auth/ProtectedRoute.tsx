import React, { useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/Auth/AuthScreen");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
