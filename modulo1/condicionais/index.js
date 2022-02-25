// --------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------

// ------------------------------- Exercício 1 -----------------------------------
/*

a.
Ele verifica se o número inserido pelo usuário é Par ou Ímpar;

b.
Para números Pares;

c.
Para número Ímpares;
*/

// ------------------------------- Exercício 2 -----------------------------------
/*

a.
Se trata de uma condicional, que irá retornar o preço e o nome, se este nome estiver dentro da mesma;

b.
O preço da fruta Maçã é R$ 2.25;

c.
Ele entenderia que o preço seria o 5 pois não teria o break para finalizar aquela linha então seria um novo valor atribuído a preço --> (O preço da fruta  Pêra  é  R$  5);
*/


// ------------------------------- Exercício 3 -----------------------------------
/*

a.
Pedindo ao usuário digitar o primeiro número que vem em mente;

b.
Se digitar o número 10 ele vai retornar o console do if que passou no teste;
Se digitar o número -10 ele (retirando a let criada dentro da condicional, ele não vai retornar nada, pois não existe uma consição criada caso o resultado não seja o desejado.)
Dará um erro de escopo, pois ela foi criada dentro de um escopo local, e querendo ser impressa dentro de um escopo global não é permitido;


*/

// --------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -------

// ------------------------------- Exercício 1 -----------------------------------

/*
const idadeUsuario = Number(prompt("Digite a sua idade."))

if (idadeUsuario > 18) {
    console.log("Você já pode tirar sua CNH.")
} else {
    console.log("Você precisa aguardar ter 18 anos para tirar sua CNH.")
}
*/

// ------------------------------- Exercício 2 -----------------------------------

/*
const aluno = prompt("Digite seu nome.")
const horarioDeAula = prompt("Digite em qual período você estuda, digite M para (Matutino), V para (Vespertino) e N para (Noturno)").toUpperCase()

if (horarioDeAula == "M") {
  console.log(`Bom dia ${aluno}, tenha um ótimo dia de aula!`)
} else if (horarioDeAula == "V") {
    console.log(`Boa tarde ${aluno}, tenha um ótimo dia de aula!`)
} else if (horarioDeAula == "N") {
    console.log(`Boa noite ${aluno}, tenha um ótimo dia de aula!`)
} else {
    console.log(`Você não está em atividade escolar em nenhum período ${aluno}...`)
}
*/

// ------------------------------- Exercício 3 -----------------------------------

/*
let aluno = prompt("Digite seu nome.")
let horarioDeAula = prompt("Digite em qual período você estuda, digite M para (Matutino), V para (Vespertino) e N para (Noturno)").toUpperCase()


switch (horarioDeAula) {
    case "M":
        console.log(`Bom dia ${aluno}, tenha um ótimo dia de aula!`)
        break
    case "V":
        console.log(`Boa tarde ${aluno}, tenha um ótimo dia de aula!`)
        break
    case "N":
        console.log(`Boa noite ${aluno}, tenha um ótimo dia de aula!`)
        break
    default:
        console.log(`Você não está em atividade escolar em nenhum período ${aluno}...`)
        break
}
*/

// ------------------------------- Exercício 4 -----------------------------------

/*
let generoDoFilme = prompt("Digite o gênero de filme que gostaria de assistir:").toLowerCase()
let valorDoIngresso = Number(prompt("Digite o valor do ingresso do filme:"))

if ((generoDoFilme == "fantasia") && (valorDoIngresso <= 15)) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}
*/

// --------- DESAFIO -------

// ------------------------------- Exercício 1 -----------------------------------

/*
let generoDoFilme = prompt("Digite o gênero de filme que gostaria de assistir:").toLowerCase()
let valorDoIngresso = Number(prompt("Digite o valor do ingresso do filme:"))
let lancheEscolhido = prompt("Digite o seu lanche escolhido:")

if ((generoDoFilme == "fantasia") && (valorDoIngresso <= 15)) {
    console.log("Bom filme!")
    console.log(`Aproveite seu lanche: ${lancheEscolhido}`)
} else {
    console.log("Escolha outro filme!")
}
*/

// ------------------------------- Exercício 2 -----------------------------------

/*
let nomeDoUsuario = prompt("Digite seu nome completo:")
let tipoDeJogo = prompt("Digite o tipo de jogo: (considere IN para Internacional, e DO para Doméstico").toLowerCase()
let etapaDoJogo = prompt("Digite a etapa do jogo: (considere SF para semifinal, DT para Terceiro Lugar e FI para Final").toLowerCase()
let categoriaDoJogo = Number(prompt("Digite uma categoria: (1, 2, 3 ou 4)"))
let quantidadeDeIngressos = Number(prompt("Digite a quantidade de ingressos:"))


const categoriasSF = {
    categoria1: 1320.00,
    categoria2: 880.00,
    categoria3: 550.00,
    categoria4: 220.00
}

const categoriasDT = {
    categoria1: 660.00,
    categoria2: 440.00,
    categoria3: 330.00,
    categoria4: 170.00,
}

const categoriasFI = {
    categoria1: 1980.00,
    categoria2: 1320.00,
    categoria3: 880.00,
    categoria4: 330.00
}


if ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && categoriaDoJogo == 1) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasSF.categoria1 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasSF.categoria1) / 4.10}`)
} 


else if ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && categoriaDoJogo == 2) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasSF.categoria2 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasSF.categoria2) / 4.10}`)
}

else if ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && categoriaDoJogo == 3) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasSF.categoria3 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasSF.categoria3) / 4.10}`)
} 

else if  ((tipoDeJogo == "in") && (etapaDoJogo == "sf") && categoriaDoJogo == 4) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasSF.categoria4 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasSF.categoria4) / 4.10}`)
} 

else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && categoriaDoJogo == 1) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasDT.categoria1 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasDT.categoria1) / 4.10}`)
}

else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && categoriaDoJogo == 2) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasDT.categoria2 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasDT.categoria2) / 4.10}`)
}

else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && categoriaDoJogo == 3) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasDT.categoria3 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasDT.categoria3) / 4.10}`)
}

else if ((tipoDeJogo == "in") && (etapaDoJogo == "dt") && categoriaDoJogo == 4) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasDT.categoria4 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasDT.categoria4) / 4.10}`)
}

else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && categoriaDoJogo == 1) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasFI.categoria1 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasFI.categoria1) / 4.10}`)
}
else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && categoriaDoJogo == 2) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasFI.categoria2 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasFI.categoria2) / 4.10}`)
}
else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && categoriaDoJogo == 3) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasFI.categoria3 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasFI.categoria3) / 4.10}`)
}
else if ((tipoDeJogo == "in") && (etapaDoJogo == "fi") && categoriaDoJogo == 4) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: U$ ${categoriasFI.categoria4 / 4.10}`)
    console.log(`Valor total: U$ ${(quantidadeDeIngressos * categoriasFI.categoria4) / 4.10}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && categoriaDoJogo == 1) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasSF.categoria1}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasSF.categoria1}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && categoriaDoJogo == 2) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasSF.categoria2}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasSF.categoria2}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && categoriaDoJogo == 3) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasSF.categoria3}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasSF.categoria3}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "sf") && categoriaDoJogo == 4) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semi-Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasSF.categoria4}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasSF.categoria4}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && categoriaDoJogo == 1) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasDT.categoria1}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasDT.categoria1}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && categoriaDoJogo == 2) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasDT.categoria2}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasDT.categoria2}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && categoriaDoJogo == 3) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasDT.categoria3}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasDT.categoria3}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "dt") && categoriaDoJogo == 4) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Disputa de Terceiro Lugar")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasDT.categoria4}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasDT.categoria4}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && categoriaDoJogo == 1) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasFI.categoria1}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasFI.categoria1}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && categoriaDoJogo == 2) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasFI.categoria2}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasFI.categoria2}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && categoriaDoJogo == 3) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasFI.categoria3}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasFI.categoria3}`)
}
else if ((tipoDeJogo == "do") && (etapaDoJogo == "fi") && categoriaDoJogo == 4) {
    console.log("------- DADOS DA COMPRA -------")
    console.log(`Nome do Usuário: ${nomeDoUsuario}`)
    console.log("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
    console.log("------- Valores -------")
    console.log(`Valor do ingresso: R$ ${categoriasFI.categoria4}`)
    console.log(`Valor total: R$ ${quantidadeDeIngressos * categoriasFI.categoria4}`)
}
else{
    console.log("Verifique se você não digitou algum dado errado...")
}
*/