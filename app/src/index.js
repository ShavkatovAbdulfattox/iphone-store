import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </>
);
