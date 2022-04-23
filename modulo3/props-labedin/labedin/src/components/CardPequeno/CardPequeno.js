import React from 'react';
import styled from 'styled-components';


const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
`

const ImgSmallCard = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 40%;
`


function CardPequeno(props) {
    return (
        <SmallCard>
            <ImgSmallCard src={ props.imagem } />
            <div>
                <p>{ props.descricao }</p>
            </div>
        </SmallCard>
    )
}

export default CardPequeno;