import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";s
import App from "./App.jsx";

console.log("Hello");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
