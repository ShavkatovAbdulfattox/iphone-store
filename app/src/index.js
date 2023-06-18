import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

import { StateProvider } from "./context/stateProvider";
import { InitialState } from "./context/initialState";
import reducer from "./context/reducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
      <StateProvider initialState={InitialState} reducer={reducer}>
        <GlobalStyles />
        <App />
        <ToastContainer />
      </StateProvider>

);
