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
