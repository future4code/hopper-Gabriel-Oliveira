import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    usuarios: [
      {
        nomeUsuario: 'Filipe Vidal',
        fotoUsuario: 'img/png.opdownload',
        fotoPost: 'img/img1.jpg'
      },

      {
        nomeUsuario: 'Gabriel Oliveira',
        fotoUsuario: 'img/Gabriel.png',
        fotoPost: 'img/img2.jpg'
      },

      {
        nomeUsuario: 'Barbara Claudino',
        fotoUsuario: 'img/Bárbara.png',
        fotoPost: 'img/img3.jpg'
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novosPosts = [...this.state.usuarios, novoPost];

    this.setState({
      pessoas: novosPosts,
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuarios) => {
      return (
        <Post
          nomeUsuario={usuarios.nomeUsuario}
          fotoUsuario={usuarios.fotoUsuario}
          fotoPost={usuarios.fotoPost}
        />
      )
    })
    return (

      <div>
        <div>
          <h1>Adicionar Post</h1>
          <div>
            <input
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nome do Usuário"}
            />
            <input
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Foto do Usuário"}
            />
            <input
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Foto Post"}
            />
            <button onClick={this.novosPosts}>Adicionar</button>
          </div>
        </div>




        <MainContainer>
          {listaDeUsuarios}
        </MainContainer>

      </div>
    );
  }
}

export default App;
