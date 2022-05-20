import React, { Component } from "react";
import axios from "axios";



export default class ListaUsers extends Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUser()
    }


    pegarUser = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "gabriel-oliveira-hopper"
            }
        }).then((res) => {
            this.setState({usuarios: res.data})
        }).catch(() => {
            alert("Não foi possível localizar os usuários.")
        })
    }

    deletaUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "gabriel-oliveira-hopper"
            }
        }).then(() => {
            this.pegarUser()
        }).catch(() => {
            alert("Não pode ser excluído")
        })
    }

    

    render() {
        const renderedUsers = this.state.usuarios.map((user) =>{
            return <p>{user.name} <button onClick={() => this.deletaUser(user.id)}>X</button></p>
        })
        return (
            <div>
                {renderedUsers}
            </div>
        )
    }
}