import React from "react";

import axios from "axios";

import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "./global.scss";
axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
