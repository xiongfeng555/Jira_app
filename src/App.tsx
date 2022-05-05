import React from "react";

import "./App.css";
import ErrorBoudary from "views/error-boudary";
// import ProjectScreen from "screens/project-list";
// import ReactList from "./screens/practice/react-list";
import AuthenticatedApp from "views/authenticated-app";
import UnAuthenticatedApp from "views/unauthenticated-app";
import { FullPageErrorFallback } from "./components/lib";
import { useAuth } from "context/auth-context";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoudary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </ErrorBoudary>
    </div>
  );
}

export default App;
