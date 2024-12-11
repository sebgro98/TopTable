import { Slot } from "expo-router";
import ProtectedRoute from "../Auth/ProtectedRoute";

export default function DashboardLayout() {
  return (
    <ProtectedRoute>
      <Slot />
    </ProtectedRoute>
  );
}
