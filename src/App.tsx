import React from "react";

import "./App.css";

// import ProjectScreen from "screens/project-list";
// import ReactList from "./screens/practice/react-list";
import AuthenticatedApp from "views/authenticated-app";
import UnAuthenticatedApp from "views/unauthenticated-app";
import { useAuth } from "context/auth-context";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
}

export default App;
