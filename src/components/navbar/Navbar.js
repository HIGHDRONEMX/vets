import React, {Component} from "react";
import $ from "jquery";
import "./Navbar.css";
import {Link} from "react-router-dom";
import mexFlag from "../../assets/img/mexFlagIco32PX.png";

export class Navbar extends Component {
  componentDidMount() {
    // const navbar = document.getElementById("mainNav");
    // window.onscroll = function() {
    //   "use strict";
    //   if (document.body.scrollTop >= 200) {
    //     myNav.classList.add("navbar-scrolled");
    //     myNav.classList.remove("nav-colored");
    //   } else {
    //     myNav.classList.remove("nav-scrolled");
    //     myNav.classList.add("nav-colored");
    //   }
    // };

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#mainNav",
      offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
      } else {
        $("#mainNav").removeClass("navbar-scrolled");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <div className="container">
            <Link to="#page-top" className="navbar-brand js-scroll-trigger">
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
                  <Link to="#services" className="nav-link js-scroll-trigger">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#portfolio" className="nav-link js-scroll-trigger">
                    Nuestros Proyectos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link top="Team" className="nav-link js-scroll-trigger">
                    Nuestro Equipo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link js-scroll-trigger">
                    Contactanos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" href="">
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
