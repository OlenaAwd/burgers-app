import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="login-container">
      <nav className="login">
        <h2>Authorization</h2>
        <p> Enter your login and password of your Github account</p>
        <button className="github" onClick={() => props.authenticate()}>
          Login
        </button>
      </nav>
    </div>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
