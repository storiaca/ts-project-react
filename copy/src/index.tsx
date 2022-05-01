import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
//import App from "./App";
//import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import "./index.css";

let root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <UserSearch />
    <EventComponent />
    {/* <GuestList /> */}
  </React.StrictMode>
);
