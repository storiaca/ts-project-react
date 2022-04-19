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
