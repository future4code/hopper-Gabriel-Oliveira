import React, { Component } from 'react'
import styled from 'styled-components'
import { IconeComContador } from '../IconeComContador/IconeComContador'
import IconeFacebook from '../../img/facebook-icone.png'
import IconeTwitter from '../../img/twitter-icone.png'
import IconeInstagram from '../../img/instagram-icone.png'


const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;

    img{
        width: 20px;
        height: 20px;
        margin: 5px 20px;
    }

`



export class SecaoCompartilhamento extends Component {

    onClickInstagram = () => {
        alert('Post compartilhado no Instagram.')
    }

    onClickFacebook = () => {
        alert('Post compartilhado no Facebooks.')
    }

    onClickTwitter = () => {
        alert('Post compartilhado no Twitter.')
    }


    render() {
        return (
            <IconsContainer>
                <IconeComContador
                    icone={IconeInstagram}
                    onClickIcone={this.onClickInstagram}

                />

                <IconeComContador
                    icone={IconeFacebook}
                    onClickIcone={this.onClickFacebook}
                />

                <IconeComContador
                    icone={IconeTwitter}
                    onClickIcone={this.onClickTwitter}
                />

            </IconsContainer>
        )

    }
}