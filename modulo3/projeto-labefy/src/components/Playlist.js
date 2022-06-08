import React from "react";
import axios from "axios"
import "./Playlist.css"






export default class CreatePlaylist extends React.Component {



    state = {
        namePlaylist: "",
        playlistsCriadas: [],
        musicasPlaylists: [],
        inputNameMusica: "",
        inputNameArtistaOuBanda: "",
        inputUrlMusica: "",
        idPlaylist: ""

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

    addMusicas = () => {
        const body = {
            name: this.state.inputNameMusica,
            artist: this.state.inputNameArtistaOuBanda,
            url: this.state.inputUrlMusica
        }
        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
            body,
            {
                headers: {
                    Authorization: "gabriel-oliveira-hopper"
                }
            }
        )
            .then(() => {
                this.setState({ inputNameMusica: "", inputNameArtistaOuBanda: "", inputUrlMusica: "" })
                alert('Música adicionada com sucesso!')
                this.selecionaPlaylist(this.state.idPlaylist)
            })
            .catch(() => {
                alert('Ops, Erro ao adicionar a Música!')
            }) 
    }

    selecionaPlaylist = id => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
                {
                    headers: {
                        Authorization: "gabriel-oliveira-hopper"
                    }
                }
            )
            .then(response => {
                this.setState({ musicasPlaylists: response.data.result.list, idPlaylist: id })
            })
            .catch(err => {
                alert(err.response.data)
            })
    }

    onChangeMusicas = event => {
        this.setState({ inputNameMusica: event.target.value })
    }

    onChangeArtistas = event => {
        this.setState({ inputNameArtistaOuBanda: event.target.value })
    }

    onChangeUrl = event => {
        this.setState({ inputUrlMusica: event.target.value })
    }



    // DELETAR MÚSICA DA PLAYLIST


    deletaMusicas = (idPlay, idMusic) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlay}/tracks/${idMusic}`,
                {
                    headers: {
                        Authorization: "gabriel-oliveira-hopper"
                    }
                }
            )
            .then(() => {
                this.selecionaPlaylist(this.state.idPlaylist)
                alert('Música excluída com sucesso!')
            })
            .catch(() => {
                alert('Ops, aconteceu um erro ao excluir Música!')
            })
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
                    <div className="itens-header">
                        <img src="img/spotify.png" ></img>
                        <h1>Labefy</h1>
                    </div>
                </div>



                <div className="areaAddPlaylist">
                    <div className="itemAddPlaylist">
                        <h3>CRIAR PLAYLIST:</h3>
                        <div>
                            <input
                                placeholder="Nome da Playlist"
                                value={this.state.namePlaylist}
                                onChange={this.onchangeNamePlaylist}
                            />
                            <img onClick={this.CriaPlaylist} src="img/lista-de-reproducao.png"></img>
                        </div>
                    </div>
                </div>



                <div className="areaAddTracksPlaylist">
                    <h3>ADICIONE SUAS MÚSICAS:</h3>
                    <div>
                        <input
                            placeholder="Insira o nome da Música"
                            value={this.state.inputNameMusica}
                            onChange={this.onChangeMusicas}
                            type="text"
                        />
                        <input
                            placeholder="Insira o nome do Artista/Banda"
                            value={this.state.inputNameArtistaOuBanda}
                            onChange={this.onChangeArtistas}
                            type="text"
                        />
                        <input
                            placeholder="Insira o link da Música"
                            value={this.state.inputUrlMusica}
                            onChange={this.onChangeUrl}
                            type="url"
                        />
                    </div>
                    <img src="img/adicionar.png" onClick={this.addMusicas}></img>
                </div>


                <div className="areaPlaylists">
                    <h2>LISTA DE PLAYLISTS:</h2>
                    <div>
                        {renderedPlaylists}
                    </div>
                </div>





                <h2>LISTA DE MÚSICAS:</h2>
                <div>
                    {renderedTracksPlaylists}
                </div>



                <div className="areaFooter">
                    <div>
                        <h2> © 2022 Labefy | Gabriel Rosa de Oliveira - Turma Hopper Labenu</h2>
                    </div>
                </div>


            </div >
        )
    }
}