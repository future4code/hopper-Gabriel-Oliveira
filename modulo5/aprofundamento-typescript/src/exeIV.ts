// a) Rodando o comando tsc && node ./build/exercicio-4.ts
// b) Sim, pois o path mudaria. precisaria então ser tsc && node ./src/exercicio-4.ts
// c) Sim, o comando tsc sem um arquivo especificado faz a transpilação de todos os arquivos .ts de uma vez.
// d) Podemos setar para os arquivos transpilados irem direto para a pasta build após o comando tsc, setando o outDir.


type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

const todosOsPokemons: pokemon[] = [pokemon1, pokemon2, pokemon3]
console.table(todosOsPokemons)