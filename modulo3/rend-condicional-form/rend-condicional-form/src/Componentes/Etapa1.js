import react from "react";
import "./Etapa.css"



export default class Etapa1 extends react.Component {
    render() {
        return(
        <div className="etapas">
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h3>1. Qual o seu nome?</h3>
            <input type="text"></input>
            <h3>2. Qual a sua idade?</h3>
            <input type="text"></input>
            <h3>3. Qual o seu email?</h3>
            <input type="email"></input>
            <h3>4. Qual a sua escolaridade?</h3>
            <input type="select"></input>
        </div>

        )

    }
}