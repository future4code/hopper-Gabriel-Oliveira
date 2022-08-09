// Usamos o process.argv[] com o parametro para cada posição.


const name = process.argv[2]
const yearOfBirth = Number(process.argv[3])

export const nameAndSevenYearsOld = `Olá, ${name} ! Você tem ${2022 - yearOfBirth} anos. Em sete anos você terá ${2029 - yearOfBirth}`
console.log(nameAndSevenYearsOld)