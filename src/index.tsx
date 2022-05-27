import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./Context/ThemeProvider";
import ListProvider from "./Context/ListProvider";

import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
