import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import AuthContext from "../content/AuthProvider";
import AuthService from "../service/auth-service";
import { useContext, useEffect } from "react";

export const Navbar = (props) => {
  const { auth, setAuth } = useContext(AuthContext);
  let navigate = useNavigate();

  let userExists;
  useEffect(() => {
      userExists = localStorage.getItem('user');
  }, []);

  const onClickLogout = (e) => {
    AuthService.logout();
    alert("Successfully logged out!");
    navigate("/");
  };

  return (
    <nav className={"container px-2 py-2 shadow-sm"}>
      <ul className="flex flex-row items-center justify-between">
        <li>
          {" "}
          <Link to="/">
            <h2 className={"font-medium text-2xl"}>Tasks</h2>
          </Link>
        </li>
        <li>
          <div>
          <Link to="/login">
                <div className={"flex items-center cursor-pointer flex-row"}>
                  
                  <HiOutlineUserCircle className={"mr-2"} size={"40px"} />
                  <p className={"text-md font-medium"}>Login</p>
                </div>
              </Link>
            {/* {auth != {} ? (
              
            ) : (
              <button
                onClick={onClickLogout}
                className={"flex flex-row items-center"}
              >
                <img
                  className={"w-12 h-12 mr-2"}
                  src={`https://avatars.dicebear.com/api/jdenticon/${username}.svg`}
                />
                <p className={"text-md text-gray-400 font-medium"}>Logout</p>
              </button>
            )} */}
          </div>
        </li>
      </ul>
    </nav>
  );
};
