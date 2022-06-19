import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const AdminHomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ADMIN HOME PAGE</h1>
      <button className="btn-logout" onClick={() => navigate("/")}>
        LOGOUT
      </button>
      <button
        className="btn-criar"
        onClick={() => navigate("/admin/trips/create")}
      >
        CRIAR VIAGEM
      </button>
      <button className="btn-voltar" onClick={() => navigate("/login")}>
        VOLTAR
      </button>
    </div>
  );
};

export default AdminHomePage;