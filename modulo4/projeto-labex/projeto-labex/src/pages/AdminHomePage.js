import React from "react";
import { useNavigate } from "react-router-dom";


const AdminHomePage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>ADMIN HOME PAGE</h1>
            <button onClick={() => navigate("/")}>LOGOUT</button>
            <button onClick={() => navigate("/admin/trips/create")}>CRIAR VIAGEM</button>
            <button onClick={() => navigate("/login")}>VOLTAR</button>
            

        </div>
    )
}

export default AdminHomePage;