import "bootstrap/dist/css/bootstrap.min.css";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "./creative.css";
import {BrowserRouter} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Router from "./constants/Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <LoginForm />
    </BrowserRouter>
  );
}

export default App;
