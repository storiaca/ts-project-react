import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import App from "./components/App";

import "./index.css";

// let root = createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <UserSearch />
//     <EventComponent />
//     {/* <GuestList /> */}
//   </React.StrictMode>
// );

ReactDOM.render(<App />, document.getElementById("root"));
