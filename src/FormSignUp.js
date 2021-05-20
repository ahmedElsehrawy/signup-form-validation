import React, { useState } from "react";
import "./FormSignUp.css";

const FormSignUp = ({ setSignedup }) => {
  //values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //errors
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //submit function
  const submitForm = (e) => {
    e.preventDefault();

    //Username
    if (!username.trim()) {
      setUsernameError("Username is Requird");
    } else {
      setUsernameError("");
    }
    //Email

    if (!email) {
      setEmailError("Email is Required");
    } else if (!/^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Email Addrees is invalid");
    } else {
      setEmailError("");
    }

    //Password
    if (!password) {
      setPasswordError("Password is Required");
    } else if (password.length < 8) {
      setPasswordError("Password must be more than 8 digits");
    } else {
      setPasswordError("");
    }

    //Confirm Password
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is Required");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Password does not match");
    } else {
      setConfirmPasswordError("");
    }

    checkSuccess();
  };

  //check for successImage
  const checkSuccess = () => {
    if (
      passwordError == "" &&
      emailError == "" &&
      usernameError == "" &&
      confirmPasswordError == "" &&
      email != "" &&
      username != "" &&
      password != "" &&
      confirmPassword != ""
    ) {
      setTimeout(setSignedup(true), 1000);
      console.log(username);
      console.log(password);
      console.log(confirmPassword);
      console.log(email);
    }
  };

  return (
    <div className="formsignup">
      <form onSubmit={submitForm}>
        <p>
          Get Started with us today! Create your account by <br /> filling out
          the information below
        </p>
        <div className="username__container">
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          {usernameError ? <p className="error">{usernameError}</p> : <p></p>}
        </div>
        <div className="email__container">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          {emailError ? <p className="error">{emailError}</p> : <p></p>}
        </div>
        <div className="password__container">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          {passwordError ? <p className="error">{passwordError}</p> : <p></p>}
        </div>
        <div className="confirmPassword__container">
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          {confirmPasswordError ? (
            <p className="error">{confirmPasswordError}</p>
          ) : (
            <p></p>
          )}
        </div>
        <div className="signup__btn">
          <button type="submit">Sign up</button>
        </div>
        <div className="login_container">
          Already have an account?Login <a href="#">here</a>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
