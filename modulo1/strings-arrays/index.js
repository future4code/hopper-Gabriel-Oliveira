//EXERCÍCIOS ARRAYS E STRINGS

//Exercícios de Interpretação de Código
/*
Exercício 1
a. Undefined, pois não foi atribuído nenhum valor a let array;

b. Null, porque o valor atribuido a ele é Null;

c. Resultaria no tamanho do array que neste caso seria 11;

d. Resultaria o número (3) do array; 

e. Resultaria [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

f. Resultaria o número (9) do array;
*/

//Exercícios de Interpretação de Código

/*
Exercício 2
A resposta para a frase "Subi num ônibus em Marrocos" seria:
SUBI NUM ÔNIBUS EM MIRROCOS, porque foi alterada todas as letras (a) por (i) e alterado o texto para caixa alta.
*/



//Exercícios de Escrita de Código

//Exercício 1
/*
const nomeDoUsuario = prompt("Digite seu nome completo.")
const emailUsuario = prompt("Digite seu email. ")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeDoUsuario}!`)
*/

//Exercícios 2
/*
let comidasPreferidas = ["Coxinha", "Camarão", "Lasanha", "Sushi","Churrasco"]
console.log(comidasPreferidas)

console.log(`Minhas comidas preferidas são:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`)

const comidaPredileta = prompt("Qual sua comida preferida?")
comidasPreferidas[1] = comidaPredileta
console.log(comidasPreferidas)
*/

//Exercícios 3
/*
let listaDeTarefas = []
let primeiraTarefa = (prompt("Digite uma tarefa à fazer..."))
let segundaTarefa = (prompt("Digite uma segunda tarefa à fazer..."))
let terceiraTarefa = (prompt("Digite uma terceira tarefa à fazer..."))
listaDeTarefas[0] = primeiraTarefa
listaDeTarefas[1] = segundaTarefa
listaDeTarefas[2] = terceiraTarefa

console.log(listaDeTarefas)

let removaUmaTarefa =(prompt("Remova uma tarefa que já foi finalizada."))
listaDeTarefas.splice(removaUmaTarefa, 1)
console.log(`Você já finalizou a tarefa a tarefa: ${removaUmaTarefa}, restam ${listaDeTarefas}`)
*/

// DESAFIO
//Exercício 1
/*
let digiteUmaFrase = (prompt("Digite uma frase!"))
let fraseSeparada = [digiteUmaFrase.split(" ")]
console.log(fraseSeparada)
*/

//Exercício 2
/*
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indiceAbacaxi = frutas.indexOf("Abacaxi")
console.log(`O índice do abacaxi é o: ${indiceAbacaxi}, o tamanho dele é: ${frutas.length}`)
*/