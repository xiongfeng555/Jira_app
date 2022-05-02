import { useAuth } from "context/auth-context";
import React from "react";
import ProjectScreen from "screens/project-list";
export default function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectScreen />
      <button onClick={logout}>登出</button>
    </div>
  );
}
