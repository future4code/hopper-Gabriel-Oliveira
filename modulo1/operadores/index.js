// EXERCÍCIOS DE INTERPRETAÇÃO

// Exercício 1
/*
a. false
b. false
c. true
d. boolean
*/

// Exercício 2
/*
O que será impresso no console seriam 2 números em formato string que vão se concatenar, exemplo:
Digite um número = 2
Digite outro número = 3
soma = 23
*/

// Exercício 3
/*
let primeiroNumero = Number(prompt("Digite um número!"))
let segundoNumero = Number(prompt("Digite outro número!"))
Desta forma os dois números digitados pelo usuário vão se somar.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//Exercício 1

const nomeUsuario = Number(prompt("Qual o seu nome?"));
const idadeBestFriend = Number(prompt("Qual a sua idade Bárbara?"));
const minhaIdade = 22;

console.log ("Sua idade é maior do que seu melhor amigo?", minhaIdade > idadeBestFriend);
console.log (minhaIdade - idadeBestFriend);


//Exercício 2
//a.
const numeroPar = Number(prompt("Digite um número PAR Ex: 2,4,6,8,10... "));
console.log(numeroPar % 2);

//b. Mantendo o padrão de números pares como pedido o resto sempre dará 0.

//c. Alterando para número ímpares, o resto sempre dará 1.


//Exercício 3
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const meses = (idadeUsuario * 12)
const dias = (idadeUsuario * 365)
const horas = (dias * 24)

console.log("Sua idade em meses é:" , meses)
console.log("Sua idade em dias é:" , dias)
console.log("Sua idade em horas é:" , horas)

//Exercício 4
const primeiroNumero = Number(prompt("Digite um número!"));
const segundoNumero = Number(prompt("Digite outro número!"));
const primeiroPeloSegundo = (primeiroNumero % segundoNumero === 0);
const segundoPeloPrimeiro = (segundoNumero % primeiroNumero === 0);

console.log("O primeiro número é maior que o segundo? -" , primeiroNumero > segundoNumero);
console.log("O primeiro número é igual ao segundo? -" , primeiroNumero == segundoNumero);
console.log("O primeiro número é divisível pelo segundo? -" , primeiroPeloSegundo);
console.log("O segundo número é divisível pelo primeiro? -" , segundoPeloPrimeiro);


// DESAFIO

//Exercício 1
//A.
const fParaK = (77 - 32)*(5/9) + 273.15
console.log(fParaK,"K")

//B.
const cParaF = (80)*(9/5) + 32
console.log(cParaF,"°F")

//C.
const cParaF2 = (30)*(9/5) + 32
console.log(cParaF2,"°F")

const resultado = (cParaF2 - 32)*(5/9) + 273.15
console.log(resultado,"K")

//D.
const DigiteUmaTemperaturaEmC = Number(prompt("Digite uma Temperatura em °C"))

const resultado = (DigiteUmaTemperaturaEmC)*(9/5) + 32
console.log(resultado,"°F")

const resultado1 = (resultado - 32)*(5/9) + 273.15
console.log(resultado1,"K")


//Exercício 2
//A.
const valorEnergia = 280 * 0.05
console.log(valorEnergia)

//B.
const desconto = 15/100
const valorEnergiaComDesconto = valorEnergia - (valorEnergia * desconto)
console.log(valorEnergiaComDesconto)


//Exercício 3

const lbParaKg =  20 * 0.45359237
console.log("20lb equivalem a", lbParaKg ,"kg")

const ozParaKg = 10.5/35.274
console.log("10.5oz equivalem a", ozParaKg , "kg")

const miParaM = 100 * 1609
console.log("100mi equivalem a", miParaM , "m")

const ftParaM = 50/3.281
console.log("50ft equivalem a", ftParaM , "m")

const galParaL = 103.56 * 3.785
console.log("103.56gal equivalem a", galParaL , "l")

const xicParaL = 450 * 0.24
console.log("450 xic equivalem a", xicParaL , "l")

const numeroAleatorio = Number(prompt("Digite o primeiro número que vier a sua mente!"))
const transfXicParaL = numeroAleatorio * 0.24
console.log(numeroAleatorio,"xic equivalem a", transfXicParaL , "l")
