import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize/modern-normalize.css";
import App  from "./components/App/App";


// Create a React root and render the App inside the element with id="root"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);