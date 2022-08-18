// let minhaString : string = 1

// O tipo number não pode ser atribuído a uma string.


// let meuNumero: number | string = 10



type persons = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const personOne: persons = {
    nome: "Gabriel",
    idade: 22,
    corFavorita: CorFavorita.VERMELHO
}

const personTwo: persons = {
    nome: "Bárbara",
    idade: 23,
    corFavorita: CorFavorita.VIOLETA
}

const personThree: persons = {
    nome: "Maurício",
    idade: 31,
    corFavorita: CorFavorita.VERDE
}


const groupPersons: persons[] = [personOne, personTwo, personThree]

console.log(groupPersons)