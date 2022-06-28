import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault()
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-oliveira-hopper/login";

    const body = {
      email: email,
      password: password
    };

    axios
      .post(URL, body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  
  return (
    <div className="container-loginPage">
      <div className="box">
        <form onSubmit={onSubmitLogin}>
          <div className="iconeAndTitulo-login">
            <img
              src="IMG/logo.png"
              className="img-icone-login"
              alt="icone-logo"
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              onChange={onChangeEmail}
              value={email}
              required />
            <label>Email</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              onChange={onChangePassword}
              value={password}
              required />
            <label>Password</label>
          </div>
          <div className="btns-login">
            <button className="btn-login">
              LOGIN
            </button>
            <button className="btn-voltar" onClick={() => navigate("/")}>
              VOLTAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;