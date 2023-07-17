import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet, HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Helmet>
        <style>{"body { background-color: hsl(180, 52%, 96%); }"}</style>
      </Helmet>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);
