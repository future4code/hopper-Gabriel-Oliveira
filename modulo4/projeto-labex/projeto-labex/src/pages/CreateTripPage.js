import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const CreateTripPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>CREATE TRIP PAGE</h1>
      <button className="btn-criar">CRIAR</button>
      <button
        className="btn-voltar"
        onClick={() => navigate("/admin/trips/list")}
      >
        VOLTAR
      </button>
    </div>
  );
};

export default CreateTripPage;