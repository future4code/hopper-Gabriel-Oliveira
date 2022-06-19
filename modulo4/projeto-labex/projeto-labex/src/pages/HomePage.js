import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button className="btn-viagem" onClick={() => navigate("/trips/list")}>
        VIAGENS
      </button>
      <button className="btn-adm" onClick={() => navigate("/login")}>
        ADMINISTRADOR
      </button>
    </div>
  );
};

export default HomePage;