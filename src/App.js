import "bootstrap/dist/css/bootstrap.min.css";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "./creative.css";
// import logo from "./logo.svg";
// import "./App.css";
import {BrowserRouter /* Router, Switch, Redirect */} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MastHead from "./components/mastHead/MastHead";
import AboutUs from "./components/aboutUs/AboutUs";
import ServicesSec from "./components/servicesSec/ServicesSec";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <MastHead />
        <AboutUs />
        <ServicesSec />
        <LoginForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
