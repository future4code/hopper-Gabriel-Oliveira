import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import './App.css'
import ChatList from "./componentes/ChatList";


const AreaContatos = styled.div`
  display: flex;
  height: 100vh;
  background-color: #EDEDED;
`

const BarraLateral = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #DDD;
`
const CabecalhoContatos = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-betWeen;
  align-items: center;
  padding: 10px 15px;
`

const Botoes = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Pesquisa = styled.div`
  background-color: #F6F6F6;
  border-bottom: 1px solid #EEE;
  padding: 5px 15px;
`

const InputBusca = styled.div`
  background-color: #FFF;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;

 input{
   flex: 1;
   border: 0;
   outline: 0;
   background-color: transparent;
   margin-left: 10px;
 }
`

const Chat = styled.div`
  flex: 1;
  background-color: #FFF;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,0.2);
  }
`

const HeaderAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
`

const HeaderBotao = styled.div`
  display: flex;
`


export default () => {

  const [listMensagem, setChatList] = useState([{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}])

  return (

    <AreaContatos>

      <BarraLateral>

        <CabecalhoContatos>

          <HeaderAvatar src="https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png" alt="Avatar" />

          <HeaderBotao>
            <Botoes>
              <img src="" alt="Status" />
            </Botoes>

            <Botoes>
              <img src="" alt="NewMensage" />
            </Botoes>

            <Botoes>
              <img src="" alt="TrêsPontos" />
            </Botoes>
          </HeaderBotao>

        </CabecalhoContatos>

        <Pesquisa>
          <InputBusca>
            <img src="/" alt="Icone de Pesquisa" />
            <input type="search" placeholder="Procurar ou começar uma nova conversa." />
          </InputBusca>
        </Pesquisa>

        <Chat>
          {listMensagem.map((item, key) => (
            <ChatList
              key={key}
            />
          ))}
        </Chat>


      </BarraLateral>

      <div>
        ...
      </div>


    </AreaContatos>


  )


}
