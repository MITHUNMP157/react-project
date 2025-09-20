import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>Welcome to Home Page!</h1>
      </div>
    </div>
  );
};

export default Home;
