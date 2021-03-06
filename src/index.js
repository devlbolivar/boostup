import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./App";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
