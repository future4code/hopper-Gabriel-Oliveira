// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let alturaUsuario = Number(prompt("Digite um altura."));
let larguraUsuario = Number(prompt("Digite uma largura"));
let resultado = alturaUsuario * larguraUsuario;
console.log(resultado)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt("Digite o ano atual."))
let anoDeNascimento = Number(prompt("Digite o ano de seu nascimento."))
let resultado2 = anoAtual - anoDeNascimento
console.log(resultado2)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nomeDoUsuario = prompt("Digite seu nome:")
let idadeDoUsuario = Number(prompt("Digite a sua idade:"))
let emailDoUsuario = prompt("Digite seu email:")
let resultado4 = (`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`);
console.log(resultado4)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite uma cor.")
  let cor2 = prompt("Digite outra cor.")
  let cor3 = prompt("Digite mais uma cor.")
  let arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let umIgualaoOutro = (string1 >= string2)
return umIgualaoOutro
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let positionInicial = array[0]
let positionFinal = array[array.length - 1]
array[0] = array[array.length - 1]
array[array.length - 1] = positionInicial
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let caixaBaixa1 = string1.toLowerCase()
let caixaBaixa2 = string2.toLowerCase()
const trueOuFalse = caixaBaixa1 == caixaBaixa2
return trueOuFalse
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const yearAtual = Number(prompt("Digite o ano atual:"))
const yearNascimento = Number(prompt("Digite o ano de seu nascimento:"))
const yearIdentidade = Number(prompt("Ano de emissão de sua identidade:"))
const idadeUser = yearAtual - yearNascimento
const idadeRg = yearAtual - yearIdentidade
console.log((idadeUser <= 20 && idadeRg >= 5) || ((idadeUser > 20 && idadeUser <= 50 && idadeRg) && idadeRg >= 10 ) || (idadeUser >= 50 && idadeRg >= 15))
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
return ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 ===0) )
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const validacaoIdade = prompt("Você tem mais de 18 anos?")
const validacaoEnsino = prompt("Você tem ensino médio completo?")
const validacaoHorario = prompt("você possui disponibilidade exclusiva durante o horário do curso?")
const sim = "sim"
console.log((validacaoIdade == sim) && (validacaoEnsino == sim) && (validacaoHorario == sim))
}

