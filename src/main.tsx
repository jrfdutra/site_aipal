import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// basename precisa ser o nome exato do repositório
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/site_aipal/">
    <App />
  </BrowserRouter>
);
