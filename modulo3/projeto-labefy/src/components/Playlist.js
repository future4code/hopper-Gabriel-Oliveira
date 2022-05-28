import React from "react";
import axios from "axios";
import "./Playlist.css"






export default class CreatePlaylist extends React.Component {



    state = {
        playlistsCriadas: [],


        musicasPlaylists: [],



        inputNamePlaylist: "",
        inputNameArtistaOuBanda: "",
        inputUrlMusica: ""

    }



    // PARTE DE CRIAÇÃO DE PLAYLISTS


    onchangeNamePlaylist = (event) => {
        this.setState({ namePlaylist: event.target.value })
    }

    CriaPlaylist = () => {
        const body = {
            name: this.state.namePlaylist
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "gabriel-oliveira-hopper"
            }
        }).then(() => {
            alert("Playlist criada com sucesso!")
            this.listarTodasAsPlaylists()
        }).catch(() => {
            alert("Que pena! Já encontra-se uma playlist com este nome.")
        }).finally(() => {
            this.setState({ namePlaylist: "" })
        })
    }



    // PARTE DE LISTA DAS PLAYLISTS



    componentDidMount() {
        this.listarTodasAsPlaylists()
    }

    listarTodasAsPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "gabriel-oliveira-hopper"
            }
        }).then((res) => {
            this.setState({ playlistsCriadas: res.data.result.list })
        }).catch(() => {
            alert("Não foi possível localizar as Playlists.")
        })
    }


    // DELETAR PLAYLIST


    deletarPlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "gabriel-oliveira-hopper"
            }
        }).then(() => {
            this.listarTodasAsPlaylists()
            alert("Playlist excluida com sucesso!")
        }).catch(() => {
            alert("A playlist não pode ser excluída.")
        })
    }


    // LISTAR MUSICAS PLAYLIST


    musicasAdicionadasPlaylist = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: "gabriel-oliveira-hopper"
            }
        }).then((res) => {
            console.log(res)
            this.setState({ musicasPlaylists: res.data.result.tracks })
        }).catch(() => {
            alert("Não foi possível localizar as músicas.")
        })
    }


    // ADICIONAR MUSICA A PLAYLIST

    addMusicasPlaylist = () => {

    }









    render() {
        const renderedPlaylists = this.state.playlistsCriadas.map((playlist) => {
            return <p><button onClick={() => this.musicasAdicionadasPlaylist(playlist.id)}>{playlist.name}</button> <button onClick={() => this.deletarPlaylist(playlist.id)}>X</button></p>
        })
        const renderedTracksPlaylists = this.state.musicasPlaylists.map((musicas) => {
            return <p>{musicas.name}</p>
        })


        return (
            <div className="container-principal">

                <div className="area-header">
                    <div>
                        <img src="img/spotify.png" ></img>
                        <h1>Labefy</h1>
                    </div>
                </div>

                <div className="areaAddPlaylist">
                    <h3>CRIAR PLAYLIST:</h3>
                    <input
                        placeholder="Nome da Playlist"
                        value={this.state.namePlaylist}
                        onChange={this.onchangeNamePlaylist}
                    />
                    <button onClick={this.CriaPlaylist}>Criar Playlist</button>
                </div>

                <h2>LISTA DE PLAYLISTS:</h2>
                <div>
                    {renderedPlaylists}
                </div>
                <h2>LISTA DE MÚSICAS:</h2>
                <div>
                    {renderedTracksPlaylists}
                </div>




            </div >
        )
    }
}