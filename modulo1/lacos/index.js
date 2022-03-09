// --------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO -------

// ------------------------------- Exercício 1 -----------------------------------

/*
Ele vai imprimir a soma = 10, que seria 0 + 1 + 2 + 3 + 4, que antecede o 5;



//  ------------------------------- Exercício 2 -----------------------------------

a. Imprimira os número maiores que 18, que seriam (19, 21, 23, 25, 27, 30);

b. Só apagar a condição if do escopo;


//  ------------------------------- Exercício 3 -----------------------------------

Ele imprimirá no console a quantidade equivalente a escrita pelo usuário no número de linhas e asterísco EXEMPLO: Digitou 2

{
    *
    **
}
*/

// --------- EXERCÍCIOS DE ESCRITA DE CÓDIGO -------

// ------------------------------- Exercício 1 -----------------------------------

/*
const numeroDePets = Number(prompt("Quantos pets você tem ao total?"))
if (numeroDePets <= 0) {
    console.log("Que pena... Você pode adotar um pet!")
}
let nomeDosPets = []

for (i = 0; i < numeroDePets ; i++) {
    let nome = prompt("Digite o nome de cada um de seus pets:")
    nomeDosPets.push(nome)
    
}
console.log(nomeDosPets)
*/

// ------------------------------- Exercício 2 -----------------------------------

//  const arrayOriginal = [181, 122, 78, 73, 95, 77, 700]


/*
a.
function retornarNumeros (array) {
  for (let numero of arrayOriginal) {
  console.log(numero)
  } 
}
retornarNumeros(arrayOriginal)

--------------------------------------------------------------------------------------

b.
function retornarDivisão (array) {
  for (let numero of arrayOriginal) {
    let divisaoPor10 = (numero / 10)
    console.log(divisaoPor10)
  } 
}
retornarDivisão(arrayOriginal)

--------------------------------------------------------------------------------------

c.
function retornarNumerosPares(array) {
  let numerosPares = []
  for (let numero of arrayOriginal) {
    if (numero % 2 === 0)
      numerosPares.push(numero)
  }
console.log(numerosPares)
}
retornarNumerosPares(arrayOriginal)

--------------------------------------------------------------------------------------

d.
function retornarFraseComIndice(array) {
  let novoArray = []
  for (let i = 0; i < arrayOriginal.length; i++) {
    let entrarArray = (O elemento do índex ${i} é: ${arrayOriginal[i]})
    novoArray.push(entrarArray)
  }

  console.log(novoArray)
}
retornarFraseComIndice(arrayOriginal)

--------------------------------------------------------------------------------------

e.
let numeroMaior = 0

for (const maiorNumero of arrayOriginal) {
  if (maiorNumero > numeroMaior) {
    numeroMaior = maiorNumero;

  }
}

let numeroMenor = numeroMaior

 for (const menorNumero of arrayOriginal) {
   if (menorNumero < numeroMenor) {
     numeroMenor = menorNumero
   }
 }

console.log(`O número maior é: ${numeroMaior} e o número menor é: ${numeroMenor}`)
*/


// --------------------------------- DESAFIO -------------------------------------

// ------------------------------- Exercício 1 -----------------------------------

/*
if (confirm("Vamos Jogar!")) {
  let numeroParaAdvinhar = Number(prompt("Digite um número para ser advinhado de 1 à 100:"));
  let tentativa 
  let numeroDeTentativas = 0

  while (numeroParaAdvinhar != tentativa) {
    tentativa = Number(prompt("Digite um número que possa ser o escolhido:"))


    if (tentativa > numeroParaAdvinhar) {
      tentativa1 = tentativa
      console.log(`Errrrrouuu! O número é menor... \n A tentativa de número foi: ${tentativa1}`)
      console.log(Number(prompt(`Digite outro número:`)))
    } 

    else if (tentativa < numeroParaAdvinhar) {
      tentativa2 = tentativa
      console.log(`Errrrrouuu! O número é maior... \n A tentativa de número foi: ${tentativa2}`)
      console.log(Number(prompt(`Digite outro número:`)))
    } 

    else if (tentativa === numeroParaAdvinhar) {
      tentativa3 = tentativa
      console.log(`Parabéns! você acertou. \n A tentativa de número foi: ${tentativa3} \n o número de tentativas foi: ${numeroDeTentativas}`)
      console.log("O jogo acabou!")
    } 

    else {
      console.log("O jogo acabou.")
    }
    numeroDeTentativas++
  }

} else {
  console.log("O jogo acabou!")
}




// FIZ OUTRO USANDO OUTRA LÓGICA, MAS QUERIA ARRUMAR O DE CIMA, PORÉM NÃO CONSEGUI...




let numeroEscolhidoParaDescobrir = Number(prompt(`Digite um número de 1 à 10`))
console.log("Game iniciado.");

let tentativas
let quantidadeDeTentativas = 1

while (numeroEscolhidoParaDescobrir !== tentativas) {
  tentativas = Number(prompt("Qual número à ser desvendado?"));
  
  if (numeroEscolhidoParaDescobrir > tentativas) {
    console.log(`Errrrrrou. \n O número escolhido é maior que ${tentativas}.`);

  } else if (numeroEscolhidoParaDescobrir < tentativas) {
    console.log(`Errrrrrou. \n O número escolhido é menor que ${tentativas}.`);
  } else {
    console.log(`Parabéns! Você acertou \n o número de tentativas foi: ${quantidadeDeTentativas}`)
  }
  quantidadeDeTentativas++
}
console.log("O jogo acabou!")
*/

// ------------------------------- Exercício 2 -----------------------------------

/*
let numeroEscolhidoPeloPc = Math.floor((Math.random() * 10) + 1);
console.log("Game iniciado.");

let tentativas
let quantidadeDeTentativas = 1

while (numeroEscolhidoPeloPc !== tentativas) {
  tentativas = Number(prompt("Qual número à ser desvendado? De 1 até 10"));
  
  if (numeroEscolhidoPeloPc > tentativas) {
    console.log(`Errrrrrou. \n O número escolhido é maior que ${tentativas}.`);

  } else if (numeroEscolhidoPeloPc < tentativas) {
    console.log(`Errrrrrou. \n O número escolhido é menor que ${tentativas}.`);
  } else {
    console.log(`Parabéns! Você acertou \n O número escolhido pelo Pc foi: ${numeroEscolhidoPeloPc} \n O número de tentativas foi: ${quantidadeDeTentativas}`)
  }
  quantidadeDeTentativas++
}
console.log("O jogo acabou!")
*/




// Muito complicado a primeira questão do desafio... A parte mais complexa é a lógica por trás...
// Depois de desvendado a parte de sortear um número fica mais fácil