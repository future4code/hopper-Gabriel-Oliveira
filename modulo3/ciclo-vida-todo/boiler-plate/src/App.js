import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
margin-top: 10px;
  text-align: center;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  select{
      margin-top: 10px;
    }
  
  button{
    margin-top: 10px;
    border-radius: 5px;
  }

  input{
    border-radius: 5px;
  }


  button:hover{
    background-color: #000000;
    color: #DCDCDC;

  }
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  salvarTarefasLs = () => {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  };

  localizarLs = () => {
    const receberTarefa = localStorage.getItem("ListaTarefas");
    const tarefasNovas = JSON.parse(receberTarefa)
    this.setState({
      ListaTarefas: tarefasNovas
    })
  };

  componentDidUpdate() {
    this.salvarTarefasLs();
  };

  componentDidMount() {
    this.localizarLs();
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const newTask = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const AddNewTask = [newTask, ...this.state.tarefas]
    this.setState({
      tarefas: AddNewTask,
      inputValue: ''
    })

  }

  selectTarefa = (id) => {
    const statusTask = this.state.tarefas.map((taskOk) => {
      if (id === taskOk.id) {
        const newStatusTarefa = {
          ...taskOk,
          completa: !taskOk.completa
        }
        return newStatusTarefa
      } else {
        return taskOk
      }
    })

    this.setState({ tarefas: statusTask })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar Tarefa</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtrar</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
