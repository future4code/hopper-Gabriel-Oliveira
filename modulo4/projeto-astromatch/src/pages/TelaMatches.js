import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const TelaDeMatches = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    meusMatches();
  });

  const meusMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Container">
      <div className="container-logo">
        <img className="logo" src="IMG/logoAstro.png" />
        <h1 className="titulo-logo">AstroTinder</h1>
        <button onClick={() => navigate("/")} className="botao-voltar">
          <img src="IMG/home.png" />
        </button>
        {/* <button className="botao-voltar" onClick={() => resetarProfiles()}><img src="IMG/lixeira.png"/></button> */}
      </div>
      {matches.map((pessoa) => {
        return (
          <div className="imgCardMatch">
            <li key={pessoa.id}>
              <img src={pessoa.photo} alt={pessoa.photo_alt} />
              <p>{pessoa.name}</p>
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default TelaDeMatches;
