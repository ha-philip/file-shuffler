import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import AuthProvider from "./AuthProvider";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
