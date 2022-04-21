import "./App.css";

import React, { useState, useContext, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./content/AuthProvider";
import AuthService from "./service/auth-service";
const App = () => {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    
    let token = localStorage.getItem("userToken");
    console.log(token)
    if(token)
    {
      AuthService.getUserData(token)
        .then((data) => {
          console.log(data);
        })
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
