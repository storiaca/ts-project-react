# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## index.tsx

import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

let root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

## App.tsx

import React from "react";
import "./App.css";

const App: React.FC = () => {
return (

<div className="App">
<header className="App-header">
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
Learn React
</a>
</header>
</div>
);
};

export default App;

## UserSearch funkcional

import { FC, useState } from "react";

const users = [
{ name: "Sarah", age: 20 },
{ name: "Alex", age: 20 },
{ name: "Michael", age: 20 },
];

const UserSearch: FC = () => {
const [name, setName] = useState("");
const [user, setUser] = useState<{ name: string; age: number } | null>();
const onSearchHandler = () => {
const foundUser = users.find((user) => {
return user.name === name;
});

    setUser(foundUser);

};
return (
<div>
<h2>User Search</h2>
<input
value={name}
onChange={(e) => setName(e.target.value)}
type="text"
/>
<button onClick={onSearchHandler}>Find User</button>
<div>
{user && user.name}
{user && user.age}
</div>
</div>
);
};

export default UserSearch;
