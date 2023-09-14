import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <h1>Log in</h1>
      <h3>
        If you do not have your account,{" "}
        <a href="#" className="create-account">
          Create account
        </a>
      </h3>
      <div className="login-container">
        <h2>User Log in</h2>

        <form>
          <div className="row mb-3">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
        <a href="#" className="reset-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
}
