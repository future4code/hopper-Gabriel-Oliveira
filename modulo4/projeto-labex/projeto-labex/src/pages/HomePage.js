import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-homepage">
      <img className="img-fundo" src="IMG/home.jpg" alt="Fundo Astronauta" />
      <img className="img-logo" src="IMG/logo.png" alt="Logo Labex" />

      <div className="buttons-home">
        <button className="btn-viagem" onClick={() => navigate("/trips/list")}>
          VIAGENS
        </button>
        <button className="btn-adm" onClick={() => navigate("/login")}>
          ADMINISTRADOR
        </button>
      </div>
    </div>
  );
};

export default HomePage;