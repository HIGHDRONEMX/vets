//crear api que tenga usuario, correo, contraseña (encriptada),
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css"

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: "",
      userPwd: ""
    };
  }

  login() {
    axios
      .get("")
      .then()
      .catch(err => console.log(`¡Error!: ${err} `));
  }

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
      <div className="container"> 
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form>
          <h4 className="card-title mb-4 mt-1">Registro</h4>
            
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Nombre</label>
                <input type="text" className="form-control" id="inputEmail4" placeholder="Nombre" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Apellido</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Apellido" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Correo</label>
              <input type="email" className="form-control" id="inputAddress" placeholder="amd@dev_ f.com" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Contraseña</label>
              <input type="password" className="form-control" id="inputAddress" placeholder="contraseña" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Repite Contraseña</label>
              <input type="password" className="form-control" id="inputAddress" placeholder="contraseña" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Domicilio</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Calle, colonia, estado,C.P." />
            </div>
            <div className="form-row">
              {/* <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div> */}
              {/* <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div> */}
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Acepta terminos y condiciones
                  </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-custom">Entra</button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

export default LoginForm;

//   <div className="container" id="signin">
    //     <div className="row">
    //       <div className="col-lg-12 d-flex justify-content-around">
    //         <div className="card">
    //           <article className="card-body">
    //             <h4 className="card-title mb-4 mt-1">Reg&iacute;stro</h4>
    //             <p>
    //               {/* <Link to="#" className="btn btn-block btn-outline-info">
    //                 <i className="fab fa-twitter"></i> Logu&eacute;ate con
    //                 Twitter
    //               </Link> */}
    //               <Link to="#" className="btn btn-block btn-outline-info">
    //                 <i className="fab fa-facebook-f"></i>     Unete con
    //                 Facebook
    //               </Link>
    //             </p>
    //             <hr />
    //             <form onSubmit={this.onFormSubmit}>
    //             <div className="form-group">
    //                 <label htmlhtmlFor="userEmailLog">
    //                   Nombre (s) completo:
    //                 </label>
    //                 <input
    //                   name="userMail"
    //                   value={this.state.userMail}
    //                   onChange={this.onInputCheck}
    //                   className="form-control"
    //                   placeholder="Usuario &oacute; correo"
    //                   type="email"
    //                   id="userEmailLog"
    //                 />
    //               </div>
    //               <div className="form-group">
    //                 <label htmlhtmlFor="userEmailLog">
    //                   Nombre (s) completo:
    //                 </label>
    //                 <input
    //                   name="userMail"
    //                   value={this.state.userMail}
    //                   onChange={this.onInputCheck}
    //                   className="form-control"
    //                   placeholder="Usuario &oacute; correo"
    //                   type="email"
    //                   id="userEmailLog"
    //                 />
    //               </div>
    //               {/* <!-- form-group// --> */}
    //               <div className="form-group">
    //                 <label htmlhtmlFor="userPassLog">Contraseña:</label>
    //                 <input
    //                   name="userPwd"
    //                   value={this.state.userPwd}
    //                   onChange={this.onInputCheck}
    //                   className="form-control"
    //                   placeholder="Su contraseña"
    //                   type="password"
    //                   id="userPassLog"
    //                 />
    //               </div>
    //               {/* <!-- form-group// --> */}
    //               <div className="row">
    //                 <div className="col-md-6">
    //                   <div className="form-group">
    //                     <button
    //                       type="submit"
    //                       className="btn btn-primary btn-block"
    //                     >
    //                       Iniciar Sesi&oacute;n
    //                     </button>
    //                   </div>
    //                   {/* <!-- form-group// --> */}
    //                 </div>
    //                 <div className="col-md-6 text-right">
    //                   <Link className="small" to="#">
    //                     ¿Olvidaste tu contraseña?
    //                   </Link>
    //                 </div>
    //               </div>
    //               {/* <!-- .row// --> */}
    //             </form>
    //             <div className="row">
    //               <div className="col-lg-12">
    //                 <label htmlhtmlFor="registerBtn">
    //                   ¿No tienes una cuenta? ¡Cr&eacute;ate una!
    //                 </label>
    //                 <p>
    //                   <Link
    //                     className="btn btn-outline-primary btn-block"
    //                     id="registerBtn"
    //                   >
    //                     Registrarse
    //                   </Link>
    //                 </p>
    //               </div>
    //             </div>
    //           </article>
    //         </div>
    //         {/* <!-- card.// --> */}
    //       </div>
    //     </div>
    //   </div>