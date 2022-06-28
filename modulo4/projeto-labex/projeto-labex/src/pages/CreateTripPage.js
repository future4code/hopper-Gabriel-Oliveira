import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTripPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [planet, setPlanet] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [durationInDays, setDurationInDays] = useState();

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePlanet = (event) => {
    setPlanet(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDurationInDays = (event) => {
    setDurationInDays(event.target.value);
  };

  const submitCreateTrips = (event) => {
    event.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };

    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-oliveira-hopper/trips",
        body,
        headers
      )
      .then((res) => {
        console.log(res.data.trips);
        alert("Viagem criada com sucesso.");
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setName("");
        setPlanet("");
        setDate("");
        setDescription("");
        setDurationInDays("");
      });
  };

  return (
    <div className="container-loginPage">
      <div className="box">
        <form onSubmit={submitCreateTrips}>
          <div className="iconeAndTitulo-login">
            <img
              src="/IMG/logo.png"
              className="img-icone-login"
              alt="icone-logo"
            />
          </div>
          <div className="input-container">
            <input type="name" onChange={onChangeName} value={name} required />
            <label>Nome da Viagem:</label>
          </div>
          <div className="select-planetas">
            <select onChange={onChangePlanet} value={planet} required>
              <option value=""> Selecione o Destino </option>
              <option value="Mercúrio">Mercúrio</option>
              <option value="Vênus">Vênus</option>
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
              <option value="Júpiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
              <option value="Plutão">Plutão</option>
              <option value="Ceres">Ceres</option>
              <option value="Éris">Éris</option>
              <option value="Makemake">Makemake</option>
              <option value="Haumea">Haumea</option>
            </select>
            <label>Planeta:</label>
          </div>
          <div className="input-container">
            <input onChange={onChangeDate} value={date} type="date" required />
            <label>Data:</label>
          </div>
          <div className="input-container">
            <input
              onChange={onChangeDescription}
              value={description}
              type="text"
              required
            />
            <label>Descrição:</label>
          </div>
          <div className="input-container">
            <input
              onChange={onChangeDurationInDays}
              value={durationInDays}
              type="number"
              required
            />
            <label>Duração em dias:</label>
          </div>
          <div className="btns-login">
            <button className="btn-criar">CRIAR</button>
            <button
              className="btn-voltar"
              onClick={() => navigate("/admin/trips/list")}
            >
              VOLTAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripPage;