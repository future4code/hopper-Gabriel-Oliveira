import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div`
  border: 5px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    height: 400px;
    width: 350px;
    border-radius: 5px
  }

`

export default function TelaPrincipal() {
  const [profiles, setProfiles] = useState([]);
  const [dados, setDados] = useState();
  

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
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel/clear")
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }













  return (
    <div>
      {profiles.map((profile) => {
        return (
          <Container>
            <img src={profile.photo} alt={profile.alt} />
            <p>{profile.name}</p>
            <p>{profile.age} anos</p>
            <p>{profile.bio}</p>
            <div>
              <button onClick={() => Like(profile.id, true)}>Like</button>
              <button onClick={() => DesLike(profile.id, false)}>DesLike </button>
              <button onClick={() => resetarProfiles()}>Resetar</button>
            </div>
          </Container>
        );
      })}
    </div>
  );
}
