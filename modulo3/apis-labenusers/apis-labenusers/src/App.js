import React from "react";
import ListaUsers from "./Components/ListaUsers";
import AreaCadastroUser from "./Components/AreaCadastroUser";
import styled from 'styled-components'


const ContainerPrincipalApp = styled.div`
  display: flex;
  justify-content: center;
`

export default class App extends React.Component {

  state = {
    paginaEmExibicao: "AreaCadastroUser"
  }

  trocarPagina = () => {
    if (this.state.paginaEmExibicao === "AreaCadastroUser") {
      this.setState({ paginaEmExibicao: "ListaUsers" })
    } else {
      this.setState({ paginaEmExibicao: "AreaCadastroUser" })
    }
  }

  render() {
    return (
      <>
      <button onClick={this.trocarPagina}>Trocar de Página</button>
      <hr/>
      { this.state.paginaEmExibicao === "AreaCadastroUser" ? <AreaCadastroUser /> : <ListaUsers /> }
    
      </>
    )
  }
}