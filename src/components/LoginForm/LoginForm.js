import React, {Component} from "react";
import {Link} from "react-router-dom";

export class LoginForm extends Component {
  login() {
    console.log("hola desde login form");
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="card">
              <article className="card-body">
                {/* <a href="" className="float-right btn btn-outline-primary">
                  Iniciar Sesi&oacute;n
                </a> */}
                <h4 className="card-title mb-4 mt-1">Iniciar Sesi&oacute;n</h4>
                <p>
                  <Link to="#" className="btn btn-block btn-outline-info">
                    <i className="fab fa-twitter"></i> Logu&eacute;ate con
                    Twitter
                  </Link>
                  <Link to="#" className="btn btn-block btn-outline-info">
                    <i className="fab fa-facebook-f"></i> Logu&eacute;ate con
                    Facebook
                  </Link>
                </p>
                <hr />
                <form>
                  <div className="form-group">
                    <input
                      name=""
                      className="form-control"
                      placeholder="Email o usuario"
                      type="email"
                      id="userEmailLog"
                    />
                  </div>
                  {/* <!-- form-group// --> */}
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Su contraseña"
                      type="password"
                      id="userPassLog"
                    />
                  </div>
                  {/* <!-- form-group// --> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <button
                          type="submit"
                          onClick={this.login()}
                          className="btn btn-primary btn-block"
                        >
                          Iniciar Sesi&oacute;n
                        </button>
                      </div>
                      {/* <!-- form-group// --> */}
                    </div>
                    <div className="col-md-6 text-right">
                      <Link className="small" to="#">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                  </div>
                  {/* <!-- .row// --> */}
                </form>
              </article>
            </div>
            {/* <!-- card.// --> */}
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
