import React from "react";
import { useNavigate } from "react-router-dom";


const TripDetailsPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>TRIP DETAILS PAGE</h1>
            <button onClick={() => navigate("/admin/trips/list")}>VOLTAR</button>
        </div>
    )
}

export default TripDetailsPage;