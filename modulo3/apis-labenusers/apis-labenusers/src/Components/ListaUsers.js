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
            alert("Usuário excluido!")
        }).catch(() => {
            alert("Usuário não pode ser excluído.")
        })
    }

    

    render() {
        const renderedUsers = this.state.usuarios.map((user) =>{
            return <li>{user.name} <button onClick={() => this.deletaUser(user.id)}>X</button></li>
        })
        return (
            <div>
                {renderedUsers}
                <hr/>
            </div>
        )
    }
}