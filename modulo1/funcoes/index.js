// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//Exercício 1
/*
a. O resultado seria impressão da multiplicação da função com a atruição do valor
= 10
= 50

b. Não imprimiria nada, pois a o console.log remmovido fazendo assim que não imprimisse nada.
*/

// Exercício 2
/*
a. A função vai retornar um booleano se true ou false se a resposta for igual a "cenoura" como declarado no includes.

b. Ele buscará a palavra "Cenoura" e dará true se encontrar.
i- true
ii- true
iii- true
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//Exercício 1
/*
a.
const minhaBio = () =>{
console.log("Meu nome é Gabriel, tenho 22 anos, moro em Tubarão SC, e sou estudante.")

}
minhaBio()
*/
/*
b.
const meusDados = (nome, idade, cidade, profissão) => {
console.log(`Meu nome é ${nome}, minha idade é ${idade}, moro em ${cidade}, trabalho como ${profissão}`)

} 
meusDados("Gabriel", 22, "Tubarão", "Vendedor")
*/

//Exercício 2
/*
a.
const soma = (numero1, numero2) =>{
const resultadoDaSoma = numero1 + numero2
return resultadoDaSoma
}
console.log(soma(20, 30))
*/


/*
b.
const igualdadeOuMaior = (numero3, numero4) =>{
const resultado2 = numero3 >= numero4
return resultado2
}
console.log(igualdadeOuMaior(10, 5))
*/


/*
c.
const numeroPar = (number1) =>{
const resultado3 = number1 % 2 == 0
return resultado3
}
console.log(numeroPar(1))
*/

/*
d.
const meuNome = ("Me chamo Gabriel!")
const recebaMensagem = (textoEscrito) => {
console.log(textoEscrito.toUpperCase(), textoEscrito.length)
}
(recebaMensagem(meuNome))   
*/

//Exercício 3
/*
const umNumero = Number(prompt("Digite um numero."))
const outroNumero = Number(prompt("Digite outro número"))
console.log(`Os números inseridos são: ${umNumero} e ${outroNumero}`)

const somarDoisNumeros = (number1, number2) => {
const mensagem = "A soma é: " + (number1 + number2)
return mensagem
}
console.log(somarDoisNumeros(umNumero, outroNumero))


const subtraiaDoisNumeros = (number1, number2) => {
const mensagem = "A subtração é: " + (number1 - number2)
return mensagem
}    
console.log(subtraiaDoisNumeros(umNumero, outroNumero))


const multiplicarDoisNumeros = (number1, number2) => {
const mensagem = "A multiplicação é: " + (number1 * number2)
return mensagem
}
console.log(multiplicarDoisNumeros(umNumero, outroNumero))


const dividaDoisNumeros = (number1, number2) => {
const mensagem = "A Divisão é: " + (number1 / number2)
return mensagem
}
console.log(dividaDoisNumeros(umNumero, outroNumero))
*/

// DESAFIO

//Exercício 1


const teste1 = (parametro1) =>{
const resultado = parametro1
return resultado
}
const escreva = "O resultado da soma é: "





const teste2 = (parametro1, parametro2) =>{
return (parametro1 + parametro2)
}
const resultado2 = teste1(escreva) + teste2(1, 4)
console.log(resultado2)






//Exercício 2
/*
const calculoHipo = (a, b) =>{
const calculoDaHipotenusa1 = ((a * a) + (b * b)) 
const calculoHipotenusa2 = Math.sqrt(calculoDaHipotenusa1)
console.log(calculoHipotenusa2)
}
calculoHipo(10, 15)
*/

