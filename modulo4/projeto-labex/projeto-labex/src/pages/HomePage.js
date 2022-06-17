import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () =>{
    const navigate = useNavigate()
    return(
        <div>
            <h1>HOME PAGE</h1>
            <button onClick={() => navigate("/trips/list")}>VIAGENS</button>
            <button onClick={() => navigate("/login")}>ADM</button>
        </div>
    )
}

export default HomePage;