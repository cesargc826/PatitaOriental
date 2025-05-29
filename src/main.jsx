import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./home.jsx";
import Header from "./header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
createRoot(document.getElementById("head")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
