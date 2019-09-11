import React, {Component} from "react";

export class LoginForm extends Component {
  render() {
    return <div></div>;
  }
}

export default LoginForm;

<div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <div class="card">
            <article class="card-body">
              <a href="" class="float-right btn btn-outline-primary">Sign up</a>
              <h4 class="card-title mb-4 mt-1">Sign in</h4>
              <p>
                <a href="" class="btn btn-block btn-outline-info">
                  <i class="fab fa-twitter"></i> Login via Twitter</a
                >
                <a href="" class="btn btn-block btn-outline-primary">
                  <i class="fab fa-facebook-f"></i> Login via facebook</a
                >
              </p>
              <hr />
              <form>
                <div class="form-group">
                  <input
                    name=""
                    class="form-control"
                    placeholder="Email or login"
                    type="email"
                    id="userEmailLog"
                  />
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="******"
                    type="password"
                    id="userPassLog"
                  />
                </div>
                <!-- form-group// -->
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <button
                        type="submit"
                        onclick="login()"
                        class="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                    </div>
                    <!-- form-group// -->
                  </div>
                  <div class="col-md-6 text-right">
                    <a class="small" href="#">Forgot password?</a>
                  </div>
                </div>
                <!-- .row// -->
              </form>
            </article>
          </div>
          <!-- card.// -->
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
