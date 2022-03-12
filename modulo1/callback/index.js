// ---------------------- Exercícios de CallBack e Funções de Arrays -----------------------------



// ---------------------- Exercícios de Interpretação de Código -----------------------------


// ---------------------- Exercícios 1 -----------------------------



// Vai ser impresso o número item que seria ({ nome: "Amanda Rangel", apelido: "Mandi" }), o index que seria o número do objeto dentro do array, e o array novamente.



// ---------------------- Exercícios 2 -----------------------------


// Vai retornar um array com o os nomes da const (usuarios).


// ---------------------- Exercícios 3 -----------------------------



// Retornará um array com os itens que os apelidos forem diferentes de "Chijo".




// ---------------------- Exercícios de Escrita de Código -----------------------------


// ---------------------- Exercícios 1 -----------------------------

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]




// a) Crie um novo array que contenha apenas o nome dos doguinhos



// const arrayNomePets = pets.map((item) => {
//    return item.nome
// })
// console.log(arrayNomePets)





// b) Crie um novo array apenas com os [cachorros salsicha]




// const arrayPetsSalsicha = pets.filter((item) => {
//    return item.raca == "Salsicha"
// })

// console.log(arrayPetsSalsicha)




// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"







// const arrayPetsPoodle = pets.filter((item) => {
//   return item.raca == "Poodle"
// })

// const arrayCupom = arrayPetsPoodle.map((item) => {
//   return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}! `)
// })
// console.log(arrayCupom)


// ---------------------- Exercícios 2 -----------------------------

// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]


// a) Crie um novo array que contenha apenas o nome de cada item



// const arrayNomeProdutos = produtos.map((item) => {
//    return item.nome
// })
// console.log(arrayNomeProdutos)



// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles


// const arrayProdutoEValores = produtos.map((item) => {
//   const desconto = (item.preco = ((item.preco / 100) * 95).toFixed(2))
//   return item
// })
// console.log(arrayProdutoEValores)



// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas


// const arrayBebidas = produtos.filter((item) => {
//    return item.categoria === "Bebidas"
// })
// console.log(arrayBebidas)



// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"



// const arrayProdutosYpe = produtos.filter((item) => {
// return item.nome.includes("Ypê")
// })
// console.log(arrayProdutosYpe)



// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"



// const arrayProdutosYpe1 = produtos.filter((item) => {
// return item.nome.includes("Ypê")
// })


// const arrayAnuncio1 = arrayProdutosYpe1.map((item) => {
//   return (`Compre ${item.nome} por ${item.preco}!`)
// })
// console.log(arrayAnuncio1)




// ---------------------- DESAFIOS -----------------------------


// ---------------------- Exercícios 1 -----------------------------



// const pokemons = [
//   { nome: "Bulbasaur", tipo: "grama" },
//   { nome: "Bellsprout", tipo: "grama" },
//   { nome: "Charmander", tipo: "fogo" },
//   { nome: "Vulpix", tipo: "fogo" },
//   { nome: "Squirtle", tipo: "água" },
//   { nome: "Psyduck", tipo: "água" },
// ]




// a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**



// const arrayOrdemAlfabeticaPokemons = pokemons.map((item) => {
//    return item.nome
// })

// const arrayOrdem = arrayOrdemAlfabeticaPokemons.sort()
// console.log(arrayOrdem)



// b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**



// const arrayTiposDePokemons = pokemons.map((item) => {
//   return item.tipo
// })
// const revisandoDuplicados = [...new Set(arrayTiposDePokemons)]
// console.log(revisandoDuplicados)

