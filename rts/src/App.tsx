import React from "react";
//import GuestList from "./state/GuestList";
//import UserSearch from "./state/UserSearch";
import UserSearch from "./refs/UserSearch";
//import EventComponent from "./events/EventComponent";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
        <UserSearch />
      </header>
    </div>
  );
};

export default App;
