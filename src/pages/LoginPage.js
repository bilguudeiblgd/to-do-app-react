import React, { useState, useContext } from "react";
import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Register from "../components/Register";
import AuthService from "../service/auth-service";
import AuthContext from "../content/AuthProvider";

const LoginPage = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [register, setRegister] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  let navigate = useNavigate();
  const onEmailChange = (value) => {
    setEmailLogin(value);
  };

  const onPasswordChange = (value) => {
    setPasswordLogin(value);
  };
  const triggerRegister = () => {
    setRegister(true);
  };
  const triggerLogin = () => {
    setRegister(false);
  };
  const handlePassword = (password) => {
    if (password.length <= 6) {
      setErrorPassword("Password must be contain 6 characters");
      return false;
    }
    return true;
  };
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setErrorPassword("");

    if (!handlePassword(passwordLogin)) return;

    try {
      const response = await AuthService.login(emailLogin, passwordLogin);

      setEmailLogin("");
      setPasswordLogin("");
      alert("Successfully logged in");

      navigate("/");
      window.location.reload();
    } catch (err) {
      setErrorMsg("Username or password doesn't match");
      return;
    }
  };

  return (
    <div>
      {" "}
      {/* <Navbar/> */}{" "}
      <div className={"container mt-20 mx-auto"}>
        <div className={"max-w-xl mx-auto"}>
          <div className={"border-2 rounded-lg px-6 py-4 shadow-md"}>
            {" "}
            {!register ? (
              //  Login
              <div className={"flex flex-row pr-8"}>
                <div className={"mr-4 mt-3"}>
                  <Link to="/">
                    <button> {"<-"} </button>{" "}
                  </Link>{" "}
                </div>{" "}
                <div className={"flex-1"}>
                  <div className={"mt-2"}>
                    <div className={"flex flex-row justify-between"}>
                      <h1 className={"text-left mb-4 text-2xl"}> Login </h1>{" "}
                    </div>
                    <p> Enter your credentials to log into your account </p>{" "}
                  </div>{" "}
                  <div className={"border-b-2 my-6 width-full"}> </div>{" "}
                  {/* Form inputs */}{" "}
                  <form onSubmit={onLoginSubmit}>
                    <div className={"flex mb-4 flex-col"}>
                      <label htmlFor="email" className={"mb-1"}>
                        Email{" "}
                      </label>{" "}
                      <input
                        onChange={(e) => onEmailChange(e.target.value)}
                        value={emailLogin}
                        name="email"
                        className={"px-2 py-2"}
                        type="email"
                        required
                      />
                    </div>{" "}
                    <div className={"flex mb-4 flex-col"}>
                      <label htmlFor="password" className={"mb-1"}>
                        Password{" "}
                      </label>{" "}
                      <input
                        name="password"
                        value={passwordLogin}
                        onChange={(e) => onPasswordChange(e.target.value)}
                        className={"px-2 py-2"}
                        type="password"
                        required
                      />
                      <p className={"text-red-500"}>{errorPassword}</p>
                      <p className={"text-red-500"}>{errorMsg}</p>
                    </div>{" "}
                    <input
                      type="submit"
                      value="Login"
                      className={
                        "w-full mt-2 mb-4 py-2 text-white rounded-md bg-blue-600"
                      }
                    />
                  </form>{" "}
                  {/* Submit button */} <div></div> {/* Register */}{" "}
                  <div>
                    <a
                      onClick={triggerRegister}
                      className={"text-blue-500 cursor-pointer"}
                    >
                      Register{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ) : (
              // Register
              <Register triggerLogin={() => triggerLogin()} />
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default LoginPage;
