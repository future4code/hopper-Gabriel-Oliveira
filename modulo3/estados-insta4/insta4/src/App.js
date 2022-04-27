import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Filipe Vidal'}
          fotoUsuario={'img/png.opdownload'}
          fotoPost={'img/img1.jpg'}
        />

        <Post
          nomeUsuario={'Gabriel Oliveira'}
          fotoUsuario={'img/Gabriel.png'}
          fotoPost={'img/img2.jpg'}
        />

        <Post
          nomeUsuario={'Barbara Claudino'}
          fotoUsuario={'img/Bárbara.png'}
          fotoPost={'img/img3.jpg'}
        />


      </MainContainer>
    );
  }
}

export default App;
