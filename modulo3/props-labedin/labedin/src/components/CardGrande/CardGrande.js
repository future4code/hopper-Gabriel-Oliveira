import React from 'react';
import styled from "styled-components"

const ImgCard = styled.img`
    width: 80px;
    margin-right: 10px;
    border-radius: 40%;
`
const Card = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const H4 = styled.h4`
    margin-bottom: 15px;
`

const CardDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <Card>
            <ImgCard src={props.imagem} />
            <CardDiv>
                <H4>{props.nome}</H4>
                <p>{props.descricao}</p>
            </CardDiv>
        </Card>
    )
}

export default CardGrande;