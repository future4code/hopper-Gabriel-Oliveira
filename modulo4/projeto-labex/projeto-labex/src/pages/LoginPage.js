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

  const onSubmitLogin = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel/login";

    const body = {
      email: email,
      password: password
    };

    axios
      .post(URL, body)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button className="btn-login" onClick={onSubmitLogin}>LOGIN</button>
      <button className="btn-voltar" onClick={() => navigate("/")}>VOLTAR</button>

    </div>
  );
};

export default LoginPage;