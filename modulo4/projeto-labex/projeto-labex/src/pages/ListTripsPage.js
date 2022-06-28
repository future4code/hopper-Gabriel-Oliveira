import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, [navigate]);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-oliveira-hopper/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container-listTrips">
      <div className="iconeAndtitulo-trips">
        <h1 className="titulo-trips">VIAGENS DISPONÍVEIS</h1>
        <img className="icone-trips" src="/IMG/foguete.png" alt="ícone" />
      </div>
      <div className="buttons-listTrips">
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

      {trips.map((trip) => {
        return (
          <div className="list-trips">
            <div className="blog_post">
              <div className="container_copy">
                <h1 className="text-titulo-trips">{trip.name}</h1>
                <h2 className="text-planeta-list">Planeta: {trip.planet}</h2>
                <h3 className="text-dateAndDuration-trips"> Data: {trip.date}</h3>
                <h3 className="text-dateAndDuration-trips"> Duração: {trip.durationInDays} Dias </h3>
                <p className="text-descrition-trips">{trip.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTripsPage;
