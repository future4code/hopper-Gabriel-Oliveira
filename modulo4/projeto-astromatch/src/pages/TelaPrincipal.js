import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const TelaPrincipal = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    requisitarProfile();
  }, []);

  const Like = (id, escolha) => {
    escolhaMatches(id, escolha);
    requisitarProfile();
  };

  const DesLike = (id, escolha) => {
    escolhaMatches(id, escolha);
    requisitarProfile();
  };

  const requisitarProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel/person"
      )
      .then((response) => {
        setProfiles([response.data.profile]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const escolhaMatches = (id, escolha) => {
    const body = {
      id: id,
      choice: escolha
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel/choose-person",
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetarProfiles = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel/clear"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div className="Container">
            <div className="container-logo">
              <img className="logo" src="IMG/logoAstro.png" />
              <h1 className="titulo-logo">AstroTinder</h1>
              <button
                className="botao-voltar"
                onClick={() => resetarProfiles()}
              >
                <img src="IMG/lixeira.png" />
              </button>
              <button
                onClick={() => navigate("/telaMatches")}
                className="botao-voltar"
              >
                <img src="IMG/listaMatches.png" />
              </button>
            </div>
            <br />
            <img
              className="imagens-profile"
              src={profile.photo}
              alt={profile.alt}
            />
            <h2>
              {profile.name}, {profile.age}
            </h2>
            <h4>{profile.bio}</h4>
            <div>
              <button
                className="button-matche"
                onClick={() => DesLike(profile.id, false)}
              >
                <img className="imagem-button" src="IMG/nmatche.png" />
              </button>
              <button
                className="button-matche"
                onClick={() => Like(profile.id, true)}
              >
                <img className="imagem-button" src="IMG/match.png" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TelaPrincipal;
