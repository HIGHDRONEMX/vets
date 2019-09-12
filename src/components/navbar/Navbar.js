import React, {Component} from "react";
import "./Navbar.css";
import {BrowserRouter /* Router, Switch, Redirect */} from "react-router-dom";
import {NavHashLink as Link} from "react-router-hash-link";
import mexFlag from "../../assets/img/mexFlagIco32PX.png";
import * as ROUTES from "../../constants/Routes/Routes";
import LoginForm from "../LoginForm/LoginForm";

export class Navbar extends Component {
  state = {
    navbarBG: ""
  };

  changeNavBG = () => {
    window.onscroll = function() {
      if (window.scrollY > 50) {
        this.setState({
          navbarBG: "navbar-scrolled"
        });
        console.log(document.body.scrollTop);
      } else {
        this.setState({
          navbarBG: ""
        });
      }
    }.bind(this);
  };

  render() {
    return (
      <BrowserRouter>
        {this.changeNavBG()}
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${this.state.navbarBG}`}
          id="mainNav"
        >
          <div className="container">
            <Link
              smooth
              to={ROUTES.LANDING}
              className="navbar-brand js-scroll-trigger"
              name="landing"
            >
              <img src={mexFlag} alt="mexFlagIco" />
              HIGH DRONE MX
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <Link
                    smooth
                    to={ROUTES.ABOUTUS}
                    className="nav-link js-scroll-trigger"
                    name="aboutus"
                  >
                    Acerca de nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    to={ROUTES.SERVICES}
                    className="nav-link js-scroll-trigger"
                    name="services"
                  >
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    to={ROUTES.SERVICES}
                    className="nav-link js-scroll-trigger"
                  >
                    Nuestros Proyectos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    to={ROUTES.SERVICES}
                    className="nav-link js-scroll-trigger"
                  >
                    Nuestro Equipo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    smooth
                    to={ROUTES.SERVICES}
                    className="nav-link js-scroll-trigger"
                  >
                    Contactanos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    smooth
                    to={ROUTES.SIGN_IN}
                    className="nav-link js-scroll-trigger"
                    component={LoginForm}
                  >
                    Iniciar Sesi&oacute;n
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Navbar;
