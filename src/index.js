import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { Router } from "./rooutes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Router />
  </React.StrictMode>
);
