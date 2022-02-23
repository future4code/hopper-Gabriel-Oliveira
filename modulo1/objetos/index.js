// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//Exercício 1
/*

a.  

indíce [0] do elenco que seria Matheus Nachtergaele;
o último indíce do array do elenco que seria Virginia Cavendish;
imprimiria canal: "Canal Brasil", horario: "19h que seria o indíce [2];


//Exercício 2

a.

O primeiro console imprimirá o objeto (cachorro):
nome: Juca
idade: 3
raça: SRD

O segundo o (gato) com a alteração de nome para Juba
nome: Juba
idade: 3
raça: SRD

O terceiro a (tartaruga) fazendo um Spread com o objeto (gato) e um replaceAll nas letras "a" e trocando por "o"
nome: Jubo
idade: 3
raça: SRD

b.

Seria o Spread ou espalhamento, que faria uma cópia de um objeto em outro usando as reticências(...)


//Exercício 3

a. 

Foi escrito uma função que retorna o objeto e sua propriedade:
False
Undefined

b.

Uma vai retornar o false, pois no objeto pessoa está (backender: false);
Outro vau retornar undefined, pois altura não esta definido;
*/


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// Exercício 1

/*

a.
const pessoa = {
    nome: "Gabriel",
    apelidos: ["Gordon", "Biel", "Bi", "Gabi"]
}

function retornarFrasePessoa(objeto) {
    return (`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}.`)
}

console.log(retornarFrasePessoa(pessoa))

b.

const novaPessoa = {
    ...pessoa,
    apelidos: ["Zé", "Zezin", "Zezão"]
}

function retornarFrasePessoa(objeto) {
    return (`Eu sou ${novaPessoa.nome}, mas pode me chamar de ${novaPessoa.apelidos}.`)
}

console.log (retornarFrasePessoa(novaPessoa))
*/



// Exercício 2
 
/*
const infoSobreMim = {
    nome: "Gabriel",
    idade: 22,
    profissao: "Vendedor"
}

const infoSobreAlguem = {
    nome: "Bárbara",
    idade: 22,
    profissao: "Designer Gráfico"
}


function retornaInformacoesSobreMim(parametro) {
    return [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
}
console.log(retornaInformacoesSobreMim(infoSobreMim))
console.log(retornaInformacoesSobreMim(infoSobreAlguem))
*/

// Exercício 3

/*
let carrinho = []

const frutinha1 = {
    nome: "Abacaxi",
    disponivel: true
}

const frutinha2 = {
    nome: "Banana",
    disponivel: true
}

const frutinha3 = {
    nome: "Morango",
    disponivel: true
}

function entradaFrutas(object1, object2, object3) {
    carrinho.push(object1, object2, object3)
    return [object1, object2, object3]
}
console.log(entradaFrutas(frutinha1, frutinha2, frutinha3))
*/

// Desafios
 
// Exercício 1

/*
 const nome = prompt("Qual o seu nome?")
 const idade = Number(prompt("Qual a sua idade?"))
 const profissao = prompt("Qual a sua profissão?")


function sobrePessoa (par1, par2, par3) {
    const entradaPessoa ={nome: par1, idade: par2, profissao: par3 }
    return entradaPessoa
}
 console.log(sobrePessoa(nome, idade, profissao))
*/


// Exercício 2

/*
const filme1 = {
    nome: "Matrix Resurrections",
    anoDeLancamento: 2022
}

const filme2 = {
    nome: "Alerta Vermelho",
    anoDeLancamento: 2021
}

function recebeFilme (filme1, filme2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento < filme2.anoDeLancamento }`) 
    console.log(`O primeiro filme foi lançado no mesmo ano? ${filme1.anoDeLancamento == filme2.anoDeLancamento}`)
}

(recebeFilme(filme1, filme2))
*/

// Exercício 3

/*
let carrinho = []

const frutinha1 = {
    nome: "Abacaxi",
    disponivel: true
}

const frutinha2 = {
    nome: "Banana",
    disponivel: true
}

const frutinha3 = {
    nome: "Morango",
    disponivel: true
}

function entradaFrutas(object1, object2, object3) {
    carrinho.push(object1, object2, object3)
    return [object1, object2, object3]
}
(entradaFrutas(frutinha1, frutinha2, frutinha3))
//console.log(carrinho)

function estoque(frutas) {
    const estoqueNegativo = false
    const indisponivel = frutas.disponivel = estoqueNegativo

    return indisponivel
}
estoque(frutinha1)
console.log(carrinho)
*/