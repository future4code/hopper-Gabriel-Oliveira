import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const TripDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>TRIP DETAILS PAGE</h1>
      <button
        className="btn-voltar"
        onClick={() => navigate("/admin/trips/list")}
      >
        VOLTAR
      </button>
    </div>
  );
};

export default TripDetailsPage;