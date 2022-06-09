import React from "react";
import ListaUsers from "./Components/ListaUsers";
import AreaCadastroUser from "./Components/AreaCadastroUser";
import styled from 'styled-components'


const ContainerPrincipalApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`

const BotaoPagina = styled.button`
  width: 150px;
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
      <ContainerPrincipalApp>
        { this.state.paginaEmExibicao === "AreaCadastroUser" ? <AreaCadastroUser /> : <ListaUsers /> }
        <hr/>
        <BotaoPagina onClick={this.trocarPagina}>Trocar de Página</BotaoPagina>
      </ContainerPrincipalApp>
      
      
    )
  }
}