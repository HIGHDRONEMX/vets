import React, {Component} from "react";
import {BrowserRouter, Route /*Redirect*/} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import MastHead from "../../components/mastHead/MastHead";
import AboutUs from "../../components/aboutUs/AboutUs";
import ServicesSec from "../../components/servicesSec/ServicesSec";
import LoginForm from "../../components/LoginForm/LoginForm";

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <routes>
          <main>
            <Navbar />
            <MastHead />
            <AboutUs />
            <ServicesSec />
            <Route exact path="/login" component={LoginForm} />
          </main>
        </routes>
      </BrowserRouter>
    );
  }
}

export default Routes;
export const LANDING = "#mastHead";
export const ABOUTUS = "#aboutus";
export const SERVICES = "#services";
export const SIGN_UP = "#signup";
export const SIGN_IN = "#signin";
