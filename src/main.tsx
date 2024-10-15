import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./layout";
import PreferencesProvider from "./contexts/preferencesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </StrictMode>
);
