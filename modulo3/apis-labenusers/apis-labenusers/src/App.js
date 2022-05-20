import React from "react";
import axios from "axios";
import ListaUsers from "./Components/ListaUsers";
import AreaCadastroUser from "./Components/AreaCadastroUser";



export default class App extends React.Component{

  render(){
    return(
      <div>
        <AreaCadastroUser/>
        <ListaUsers/>
      </div>
    )
  }
}