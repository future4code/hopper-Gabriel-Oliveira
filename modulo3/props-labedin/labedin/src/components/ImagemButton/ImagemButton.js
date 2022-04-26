import React from 'react';
import styled from "styled-components"


const ContainerBotao = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ImgBotao = styled.img `
    width: 20px;
    margin-right: 10px;
    margin-left: 20px;
`

function ImagemButton(props) {
    return (
        <ContainerBotao>
            <ImgBotao src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerBotao>

    )
}

export default ImagemButton;