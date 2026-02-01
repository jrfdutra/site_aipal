import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Para TypeScript reconhecer corretamente o MODE
const mode = import.meta.env.MODE as string;

// Condicional: "/" local, "/site_aipal/" no GitHub Pages
const basename = mode === "production" ? "/site_aipal/" : "/";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
