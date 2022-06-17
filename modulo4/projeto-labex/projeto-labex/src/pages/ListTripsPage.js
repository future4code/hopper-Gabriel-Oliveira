import React from "react";
import { useNavigate } from "react-router-dom";


const ListTripsPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>LIST TRIPS PAGE</h1>
            <button onClick={() => navigate("/trips/application")}>INSCREVER-SE</button>
            <button onClick={() => navigate("/")}>VOLTAR</button>
        </div>
    )
}

export default ListTripsPage;