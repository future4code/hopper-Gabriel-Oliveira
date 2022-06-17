import React from "react";
import { useNavigate } from "react-router-dom";


const ApplicationFormPage = () =>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>APPLICATION FORM PAGE</h1>
            <button onClick={() => navigate("/trips/application")}>INSCREVER-SE</button>
            <button onClick={() => navigate("/trips/list")}>VOLTAR</button>
        </div>
    )
}

export default ApplicationFormPage;