import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="img/Minha Foto.jpeg"
          nome="Gabriel Oliveira"
          descricao="Oi, eu sou o Gabriel Oliveira. Sou aluno da turma Hopper de Web Full Stack da Labenu. Amando a trajetória do curso, cada dia aprendendo mais e mais. Na esperança de um emprego na área em breve."
        />

        <ImagemButton
          imagem="img/mais.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contatos</h2>
        <CardPequeno
          imagem="img/email.png"
          descricao="Email: gabrieloliveira-lg@hotmail.com"
        />

        <CardPequeno
          imagem="img/endereco.png"
          descricao="Endereço: Rua Augusto Severo Nº428, Tubarão-SC, CEP: 88701-375"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="img/Logo Labenu.png"
          nome="Labenu"
          descricao="Estudante da Turma Hopper (Web Full Stack)."
        />

        <CardGrande
          imagem="img/Logo Imperiums.jpg"
          nome="Imperiums Performance Computers"
          descricao="Vendedor Online."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
