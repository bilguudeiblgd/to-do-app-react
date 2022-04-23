import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../content/AuthProvider";
import AuthService from "../service/auth-service";

const Register = (props) => {
  let navigate = useNavigate();
  const {setAuth} = useContext(AuthContext);
  const { triggerLogin } = props;
  const [usernameRegister, setUsernameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const usernameRegisterChange = (value) => {
    setUsernameRegister(value);
  };
  const emailRegisterChange = (value) => {
    setEmailRegister(value);
  };
  const passwordRegisterChange = (value) => {
    setPasswordRegister(value);
  };

  const handleSubmit = async (e) => {
    
    AuthService.register(usernameRegister, emailRegister, passwordRegister)
      .then((data) => {
        setUsernameRegister("");
        setEmailRegister("");
        setPasswordRegister("");
        const {user, token} = data
        setAuth({user_info: user, accessToken: token});
        alert("User is created successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className={"flex flex-row pr-8"}>
        <div className={"mr-4 mt-3"}>
          <a className={"cursor-pointer"} onClick={triggerLogin}>
            {"<-"}
          </a>
        </div>
        <div className={"flex-1"}>
          <div className={"mt-2"}>
            <div className={"flex flex-row justify-between"}>
              <h1 className={"text-left mb-4 text-2xl"}>Register</h1>
            </div>

            <p>Enter your credentials to create new account</p>
          </div>
          <div className={"border-b-2 my-6 width-full"}></div>
          {/* Form inputs */}
          <div>
            <div className={"flex mb-4 flex-col"}>
              <label htmlFor="email" className={"mb-1"}>
                Username
              </label>
              <input
                value={usernameRegister}
                onChange={(e) => usernameRegisterChange(e.target.value)}
                name="email"
                className={"px-2 py-2"}
                type="text"
              />
            </div>
            <div className={"flex mb-4 flex-col"}>
              <label htmlFor="email" className={"mb-1"}>
                Email
              </label>
              <input
                value={emailRegister}
                onChange={(e) => emailRegisterChange(e.target.value)}
                name="email"
                className={"px-2 py-2"}
                type="text"
              />
            </div>
            <div className={"flex mb-4 flex-col"}>
              <label htmlFor="password" className={"mb-1"}>
                Password
              </label>
              <input
                value={passwordRegister}
                onChange={(e) => passwordRegisterChange(e.target.value)}
                name="password"
                className={"px-2 py-2"}
                type="password"
              />
            </div>
          </div>
          {/* Submit button */}
          <div>
            <button
              onClick={handleSubmit}
              className={"w-full mt-2 mb-4 py-2 rounded-md bg-blue-600"}
            >
              <p className={"text-white"}>Create account</p>
            </button>
          </div>
          {/* Register */}
          <div>
            <a className={"text-blue-500"}>Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
