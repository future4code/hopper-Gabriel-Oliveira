import React, { Component } from "react";
import axios from "axios";



export default class AreaCadastroUser extends Component {
    state = {
        name: "",
        email: ""
    }



    CriarUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "gabriel-oliveira-hopper"
            }
        }).then(() => {
            alert("Usuário criado com sucesso")
        }).catch(() => {
            alert("Não foi possível criar o usuário")
        })
    }




    onchangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    onchangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }


    render() {
        return (
            <div>
                <input
                    placeholder="Nome"
                    value={this.state.name}
                    onChange={this.onchangeName}
                />

                <input
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onchangeEmail}
                />
                <button onClick={this.CriarUser}>Criar usuário</button>
            </div>
        )
    }
}