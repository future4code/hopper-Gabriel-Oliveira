import React from "react";
import styled from 'styled-components';

const Intro = styled.div`
    background-color: #F8F9FA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-bottom: 6px solid pink;

    h1{
        color: #525252;
        font-weight: normal;
        margin-top: -20px;
        margin-bottom: 20px;
    }

    h5{
        color: #777;
        font-weight: normal;
        margin-top: -10px;
        line-height: 20px;
        text-align: center;
    }



`


const IntroImg = styled.img`
    width: 320px;
    height: auto;
`




export default () => {
    return (
        <Intro>
            <IntroImg src="img/whatsPink.png" alt="Logo Whatsapp" />
            <h1>WhatsApp Web</h1>  
            <h5>Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à <br/>internet.</h5>
            <h5>Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo.</h5> 
        </Intro>

    )
}