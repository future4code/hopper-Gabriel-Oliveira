import React from "react";
import styled from 'styled-components';


const AreaPrincipalChat = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const HeaderChat = styled.div`
    height: 60px;
    border-bottom: 1px solid #CCC;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 15px;
        margin-right: 15px;
    }

    div{
        font-size: 17px;
        color: #000;
    }
`

const HeaderBotoes = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`

const Btn = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
        height: 20px;
        width: auto;
    }
`

const BodyChat = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #E5DDD5;
    background-size: cover;
    background-position: center;
    background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRUXFxcXFRUXFxUXFxcXFxUWFxUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDjcZFRkrKysrKysrKysrKysrKysrKysrKysrNzcrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAL0BCgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EACQQAQEBAAICAQMFAQAAAAAAAAABERNhAgMSIUFxMZGhwfBR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APXUtUZaSC4QADQRahAULEwCkq0oJpFoAVFADACoqYCmpVAKAM6tMXAAARU0lAiliAU1YzfLsFqhQC1KSAED4gupb9VwoBiUgFhV1NADDQUQBRJF0CiYoJKuIQF1J9FAKRKgKFMBdTyXDAIIAqfH8KfIBLABdTTSAqQSAunitqQFGFnQLAKBarK6CkiEoCfJaQCXQNBMaS00FLEhADTTAVKIC1L9Wk0FtKz5RN/cGj4lNv8AwELSJiC6SsyqC79i0gBDQ0AIAn4N+0Ji2goyoBRNBpIABYaAjSGgkUn6pYCym9VmqC6akWgkatRAXSwLAL/v6TaVZnQIqEoFJEi2ABKQF1E1QASAqoAUiANIQoEDSgGsroLp8jSgVUoCpnaVQBFBUtLUgLEVNBpNKoM6WhoJ5eS6YaCiUgFKUwEWIoAAFMADCkAKQkT5AuEACAAWmhoJaeNUlAVIkBpDCQEq6igaYGAlPGlIKhipQXRloDEqghATRVSqQEipKsEKajQqaiw0AABdSJQWoqYC1FKAVFgGFAE8VRQD5EqZf9oJI0zaUFqWqWgSgAqJFoM41DCAWpq4AusrpaAABYUMAKmloLFZUEsUqA0lqLKBKrK6AIoJ5QioCpsXEAlJUtWIJVADBKmg0aeJoEpolBdJUp4gthEpYBqphP0A0oaBLFtJEBYJ91BNXUpKC1FIAIaCmpFA0tEBTYhnYJV7SEA0WFoFMTsAFIAEgAhamg0RN6WUFqEqYCkQBTEv4AU1DxBdTClBdTStaCFiABYsICRUxaAfsM/IFJUUAiaoBEhaCxLVhQZ8a1qQBRKAtSFpoBFSAtBKCjNAaIkUA1FAp9DTQCJVoFNRQZlaqFBab2amAkqul9XZwdg5prpxdrxdkHM114u0vp7BzHTi7OLsHKUrrPV2X09g5wrpxdnF2DmOl9PZxd/wDlq1uenteLsHO1HWersnp7Bz1HXi7L6uwcqsdOHs4ewcldOLtOHsGIjrxdnF3/AOY6cXa8XYOKuk9PZxdg5WrXTi7OHsHKLjpxdnD2D/2Q==');
`


const FooterChat = styled.div`
    height: 62px;
    display: flex;
    align-items: center;
`

const FooterInicio = styled.div`
    display: flex;
`

const FooterInput = styled.div`
    flex: 1;

    input{
        width: 100%;
        height: 40px;
        border: 0;
        outline: 0;
        background-color: #FFF;
        border-radius: 20px;
        font-size: 15px;
        color: #4A4A4A;
        padding-left: 15px;
    }
`

const FooterFim = styled.div`
    display: flex;
`



export default () => {
    return (
        <AreaPrincipalChat>

            <HeaderChat>

                <HeaderInfo>
                    <img src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg" alt="Avatar" />
                    <div>Gabriel Oliveira</div>
                </HeaderInfo>

                <HeaderBotoes>

                    <Btn>
                        <img src="img/procurar.png" alt="Icone de Pesquisa" />
                    </Btn>

                    <Btn>
                        <img src="img/clipes.png" alt="Anexar" />
                    </Btn>

                    <Btn>
                        <img src="img/tres-pontos.png" alt="Mais" />
                    </Btn>



                </HeaderBotoes>


            </HeaderChat>



            <BodyChat>
            </BodyChat>


            <FooterChat>

                <FooterInicio>
                    <Btn>
                        <img src="img/emoji.png" alt="Icone de Pesquisa" />
                    </Btn>
                </FooterInicio>

                <FooterInput>
                    <input type="text" placeholder="Digite uma mensagem"/>

                </FooterInput>

                <FooterFim>
                    <Btn>
                        <img src="img/send.png" alt="Icone de Pesquisa" />
                    </Btn>
                </FooterFim>


            </FooterChat>


        </AreaPrincipalChat>
    )
}