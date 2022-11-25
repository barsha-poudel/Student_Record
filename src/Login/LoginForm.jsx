import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
></link>;

const LoginForm = () => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([
    {
      email: " ",
      password: " ",
    },
  ]);
  const [validation, setValidation] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    delete validation[e.target.name];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkValidation()){
      localStorage.setItem("loginData", JSON.stringify(loginData));
      navigate("/userdashboard");
    }
   
  };

  const checkValidation = () => {
    let isValid = 1;
    let errors = { ...validation };
    if (!loginData.email) {
      errors.email = "email is required";
      isValid = 0
    }
    else if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(loginData.email)) {
      errors.email = "you must enter the valid email";
      isValid = 0
    }
    if (!loginData.password) {
      errors.password = "password is required";
      isValid= 0
    }
    setValidation(errors);
    return isValid
  };
  const TogglePassword =()=>{
    setPasswordShown(!passwordShown)
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h3>LOGIN</h3>
        <div className="mb-3">
          <label className="email-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={loginData.email || ""}
            placeholder="Enter email"
            onChange={handleChange}
          />
          {validation.email &&<p style={{color:"red", fontSize: "13px"}}>{validation.email}</p>}
        </div>
        <div className="mb-3">
          <label className="password-label">Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            value={loginData.password || ""}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <i onClick={TogglePassword}>{eye}</i>
          {validation.password && <p style={{color:"red", fontSize: "13px"}}>{validation.password}</p>}
          
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="#">Forgot password?</a>
        </p>
      </form>
    </>
  );
};
export default LoginForm;
