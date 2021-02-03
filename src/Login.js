import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import sushiLogo from "./images/sushiLogo.png";
function Login() {
  const [isFaded, setIsFaded] = useState(false);

  const [namer, setNamer] = useState("");
  const [emailr, setEmailr] = useState("");
  const [passwordr, setPasswordr] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // console.log(`Email: ${email}, Password: ${password}`);
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: `"${email}"`,
        password: `"${password}"`,
      }),
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          // console.log("Login Success");
          <Link to="/cart" />;
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });

    // e.target.email.value = "";
    // e.target.password.value = "";
  };

  // Registration Part Handeling

  const handleNameInputR = (e) => {
    setNamer(e.target.value);
  };
  const handleEmailInputR = (e) => {
    setEmailr(e.target.value);
  };
  const handlePasswordInputR = (e) => {
    setPasswordr(e.target.value);
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log(`Name:${namer}, Email: ${emailr}, Password: ${passwordr}`);
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: `"${namer}"`,
        email: `"${emailr}"`,
        password: `"${passwordr}"`,
      }),
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("Registration Successful");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error Signup in please try again");
      });
    // e.target.email.value = "";
    // e.target.password.value = "";
  };

  const handleFaded = () => {
    setIsFaded(!isFaded);
  };
  return (
    <div className="loginPage">
      <div
        className="loginContainer"
        style={isFaded ? { filter: "blur(4px)" } : undefined}
      >
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmitLogin}>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={handleEmailInput} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={handlePasswordInput}
          />
          <button className="loginAll" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Conditions of Use & Sale. Please see
          our Privacy Policy, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className="loginAll" onClick={handleFaded}>
          Create your Account
        </button>
      </div>
      <Link to="/cart">
        <img className="loginLogo" src={sushiLogo} alt="" />
      </Link>
      {/* /////////////////////////////////////////////////////////////////////////////       */}
      <div
        className="registrationContainer"
        style={isFaded ? undefined : { filter: "blur(4px)" }}
      >
        <h1>SignUp</h1>
        <form onSubmit={handleSubmitRegister}>
          <h5>Name</h5>
          <input type="text" value={namer} onChange={handleNameInputR} />
          {/*
          <h5>Last Name</h5>
          <input type='text' /> */}
          {/* <h5>Address</h5>
          <input type='text' /> */}
          <h5>E-mail</h5>
          <input type="text" value={emailr} onChange={handleEmailInputR} />
          <h5>Password</h5>
          <input
            type="password"
            value={passwordr}
            onChange={handlePasswordInputR}
          />
          {/* <h5>Re-enter Password</h5>
          <input type='password' /> */}
          <button className="loginAll" type="submit">
            Create Account
          </button>
        </form>
        <p>
          By signing-Up you agree to the Conditions of Use & Sale. Please see
          our Privacy Policy, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className="loginAll" onClick={handleFaded}>
          Already Have a Account? Sign In instead
        </button>
      </div>
    </div>
  );
}
export default Login;
