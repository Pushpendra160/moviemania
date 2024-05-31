import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
  
      <App />

    </Provider>
);
