import react from "react";
import Etapa1 from './Componentes/Etapa1';
import Etapa2 from './Componentes/Etapa2';
import Etapa3 from './Componentes/Etapa3';
import Final from './Componentes/Final';
import "./App.css"


export default class App extends react.Component {

  state = {
    etapa: 1
  }

  qualEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />

      case 2:
        return <Etapa2 />

      case 3:
        return <Etapa3 />

      case 4:
        return <Final />
    }
  }

  onClickMudarEtapa = () => {
    const alteraEtapa = this.state.etapa + 1
    this.setState({etapa: alteraEtapa})
  }


  render() {
    return (
      <div className="containerPrincipal">
        {this.qualEtapa()}
        {this.state.etapa < 4 && <button className="myButton" onClick={this.onClickMudarEtapa}>Próxima Etapa</button>}
      </div>
    )
  }
}
