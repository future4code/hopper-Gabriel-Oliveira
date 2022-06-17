import React from "react";
import { useNavigate } from "react-router-dom";


const CreateTripPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>CREATE TRIP PAGE</h1>
            <button>CRIAR</button>
            <button onClick={() => navigate("/admin/trips/list")}>VOLTAR</button>
        </div>
    )
}

export default CreateTripPage;