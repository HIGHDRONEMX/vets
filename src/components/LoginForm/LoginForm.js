//crear api que tenga usuario, correo, contraseña (encriptada),
import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: "",
      userPwd: ""
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.userMail !== "" && this.state.userPwd !== "") {
      console.log(this.state.userMail);
      console.log(this.state.userPwd);
      axios
        .get(
          `https://protected-spire-77051.herokuapp.com/user/${this.state.userMail}`,
          this.state
        )
        .then(res => {
          if (this.state.userPwd === res.data.userPwd) {
            console.log("Estas adentro!");
          } else {
            console.log("Estas fuera!");
          }
        })
        .catch(err => console.log(err));
    } else {
    }
  };

  onInputCheck = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="container" id="signin">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-around">
            <div className="card">
              <article className="card-body">
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
                <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="userEmailLog">
                      Usuario &oacute; correo:
                    </label>
                    <input
                      name="userMail"
                      value={this.state.userMail}
                      onChange={this.onInputCheck}
                      className="form-control"
                      placeholder="Usuario &oacute; correo"
                      type="text"
                      id="userEmailLog"
                    />
                  </div>
                  {/* <!-- form-group// --> */}
                  <div className="form-group">
                    <label htmlFor="userPassLog">Contraseña:</label>
                    <input
                      name="userPwd"
                      value={this.state.userPwd}
                      onChange={this.onInputCheck}
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
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="registerBtn">
                      ¿No tienes una cuenta? ¡Cr&eacute;ate una!
                    </label>
                    <p>
                      <Link
                        className="btn btn-outline-primary btn-block"
                        id="registerBtn"
                      >
                        Registrarse
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- card.// --> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
