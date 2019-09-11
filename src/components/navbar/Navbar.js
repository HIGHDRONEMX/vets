import React, {Component} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import mexFlag from "../../assets/img/mexFlagIco32PX.png";
// import ServicesSec from "../servicesSec/ServicesSec";

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

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.changeNavBG()}
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${this.state.navbarBG}`}
          id="mainNav"
        >
          <div className="container">
            <Link to="/page-top" className="navbar-brand js-scroll-trigger">
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
                  <Link to="#about" className="nav-link js-scroll-trigger">
                    Acerca de nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-link js-scroll-trigger"
                    // component={ServicesSec}
                  >
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#portfolio" className="nav-link js-scroll-trigger">
                    Nuestros Proyectos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="Team" className="nav-link js-scroll-trigger">
                    Nuestro Equipo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link js-scroll-trigger">
                    Contactanos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link js-scroll-trigger" href="">
                    Iniciar Sesi&oacute;n
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;