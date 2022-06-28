import React from 'react';
import styled from 'styled-components';

const ItemLista = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 70px;

    &:hover{
       background-color: #F5F5F5;
    }

    &.active{
        background-color: #EBEBEB;
    }
`

const ImgAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 10px;
`

const Linhas = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #EEE;
    padding-right: 15px;
    margin left: 15px;

    flex-wrap: wrap;
    min-width: 0;
`

const Linha = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Nome = styled.div`
    font-size: 17px;
    color: #000;
`

const Data = styled.div`
    font-size: 12px;
    color: #999;
`

const ProximaMensagem = styled.div`
    font-size: 14px;
    color: #999;
    display: flex;
    width: 100%;

p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin:0;

    }
`






export default ({onClick, active, data}) => {
    return (

        <ItemLista 
        className={`${active?'active':''}`} 
        onClick={onClick}>
            <ImgAvatar src={data.image} alt='' />
            <Linhas>
                <Linha>
                    <Nome>{data.title}</Nome>
                    <Data>4:54</Data>
                </Linha>

                <Linha>
                    <ProximaMensagem>
                        <p> Olá, como você esta? Olá, como você esta? Olá, como você esta? </p>
                    </ProximaMensagem>
                </Linha>
            </Linhas>
        </ItemLista>

    )
}