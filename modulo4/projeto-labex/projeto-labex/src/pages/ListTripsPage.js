import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const ListTripsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>LIST TRIPS PAGE</h1>
      <button
        className="btn-inscrever"
        onClick={() => navigate("/trips/application")}
      >
        INSCREVER-SE
      </button>
      <button className="btn-voltar" onClick={() => navigate("/")}>
        VOLTAR
      </button>
    </div>
  );
};

export default ListTripsPage;