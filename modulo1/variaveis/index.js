// Exercícios de interpretação de código


// Exercício 1
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
// 10;
// 10, 5;


//Exercício 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
// 10, 10, 10;

// Exercício 3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
// p = cargaHorariaDiaria;
// t = salarioDiario;
// alert(`Você recebe ${salarioDiario/cargaHorariaDiaria} por hora`)


// Exercícios de ecrita de código



// Exercício 1
let nome = prompt ("Qual o seu nome?")
let idade = prompt ("Qual a sua idade?")

console.log(typeof idade)
console.log(typeof nome)
// "undefined" --> atribuição não definida às variáveis;
// após a inserção dos valores nome = ("Qual o seu nome?") e idade = ("Qual a sua idade?")  as variáveis tem como o valor string para as duas;

console.log ("Olá" , nome , "você tem", idade , "anos.")



//Exercício 2
let trabalha = prompt ("Você trabalha?")
let estudante = prompt ("Você estuda?")
let conciliacao = prompt ("Você consegue conciliar as duas coisas?")


console.log ("Você trabalha? - " ,trabalha)
console.log ("Você estuda? - ", estudante)
console.log ("Você consegue conciliar as duas coisas? - ", conciliacao)



// Exercício 3
let a = 10
let b = 25
let c 

c = a 
a = b
b = c 

console.log (a)
console.log (b)


// Desafio 
const numberOne = Number (prompt("Digite um número"))
const numberTwo = Number (prompt("Digite outro número"))
const resultado = numberOne + numberTwo

console.log(resultado)