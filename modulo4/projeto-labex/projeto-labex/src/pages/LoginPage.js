import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button
        className="btn-login"
        onClick={() => navigate("/admin/trips/list")}
      >
        LOGIN
      </button>
      <button className="btn-voltar" onClick={() => navigate("/")}>
        VOLTAR
      </button>
    </div>
  );
};

export default LoginPage;