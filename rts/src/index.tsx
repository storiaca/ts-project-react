import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
//import App from "./App";
import GuestList from "./state/GuestList";
import "./index.css";

let root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GuestList />
  </React.StrictMode>
);
