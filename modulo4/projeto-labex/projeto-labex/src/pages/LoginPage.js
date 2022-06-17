import React from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <button onClick={() => navigate("/admin/trips/list")}>LOGIN</button>
            <button onClick={() => navigate("/")}>VOLTAR</button>
        </div>
    )
}

export default LoginPage;