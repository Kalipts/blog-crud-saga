import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/main.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
