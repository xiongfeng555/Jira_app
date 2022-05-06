import "./wdyr";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadServer, DevTools } from "jira-dev-tool";
import AppProvider from "./context/index";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
loadServer(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <Router>
      <AppProvider>
        <DevTools />
        <App />
      </AppProvider>
    </Router>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
