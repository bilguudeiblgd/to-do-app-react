import "./App.css";

import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./content/AuthProvider";
import AuthService from "./service/auth-service";
const App = () => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const fetchUserData = async (token) => {
     
      try {
        const userData = await AuthService.getUserData(token);
        await setAuth(userData);
      } catch (err) {
        console.log(err);
      }
    };
   
    let token = localStorage.getItem("userToken");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
