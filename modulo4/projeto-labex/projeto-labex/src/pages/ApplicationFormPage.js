import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>APPLICATION FORM PAGE</h1>
      <button
        className="btn-inscrever"
        onClick={() => navigate("/trips/application")}
      >
        INSCREVER-SE
      </button>
      <button className="btn-voltar" onClick={() => navigate("/trips/list")}>
        VOLTAR
      </button>
    </div>
  );
};

export default ApplicationFormPage;