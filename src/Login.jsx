import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-signUp-container">
      <h1>Log in / Sign in</h1>
      <div classNane="login-container">
        <div className="row m-4">
          <div className="col">
            <h2>Log in</h2>
            <form>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword3"
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Log in
              </button>
            </form>
            <a href="#" className="reset-password">
              Forgot password?
            </a>
          </div>

          <div className="col">
            <h2>Sign in</h2>
            <form>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" />
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword3"
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
