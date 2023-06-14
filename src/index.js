import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("app");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);

// register serviceWorker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./worker.js")
    .then(() => console.log("registered"))
    .catch((err) => console.log("error registering", err));
}
