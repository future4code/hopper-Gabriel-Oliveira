import React, { useEffect, useState } from "react";
import axios from 'axios'
import TelaPrincipal from "./TelaPrincipal";



export default function TelaDeMatches() {
    const [matches, setMatches] = useState([])



    useEffect(() =>{
        meusMatches()
    })

    const meusMatches = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel/matches")
            .then((response) => {
                setMatches(response.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div>
            
            {matches.map((pessoa) => {
                return (
                    <div>
                    <li key={pessoa.id}>
                        <img src={pessoa.photo} alt={pessoa.photo_alt} />
                        <p>{pessoa.name}</p>
                    </li>
                    </div>
                )
            })}
            <button>Voltar</button>
        </div>
    )
}