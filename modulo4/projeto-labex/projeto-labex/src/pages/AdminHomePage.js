import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const AdminHomePage = () => {
  const navigate = useNavigate();
  const [tripsAdm, setTripsAdm] = useState();


  useEffect(() => {
    getTripsAdm();
  }, [navigate]);

  const getTripsAdm = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-oliveira-hopper/trips"
      )
      .then((response) => {
        setTripsAdm(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };





  return (
    <div className="container-listTrips"  >
      <div className="iconeAndtitulo-trips">
        <h1 className="titulo-trips">ÁREA ADMINISTRADOR</h1>
        <img className="icone-trips" src="/IMG/definicoes.png" alt="ícone" />
      </div>

      <div className="buttons-listTrips">
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

      {tripsAdm.map((tripAdm) => {
        return (
          <div className="list-trips">
          <div className="blog_postAdm">
            <div className="container_copy_areaAdm">
              <h1 className="text-titulo-trips">{tripAdm.name}</h1>
              <h2 className="text-planeta-list">Planeta: {tripAdm.planet}</h2>
              <h3 className="text-dateAndDuration-trips"> Data: {tripAdm.date}</h3>
              <h3 className="text-dateAndDuration-trips"> Duração: {tripAdm.durationInDays} Dias </h3>
            </div>
          </div>
        </div>
        
        )})};

    </div>
  );
};

export default AdminHomePage;