type stats = {
    maior: number,
    menor: number,
    media: number
}
 type amostra = {
     numeros: number[],
     obterEstatisticas: (numeros: number[]) => stats
 }

function obterEstatisticas(numeros:number[]): stats {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: stats = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const objeto1: amostra = {
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    obterEstatisticas: obterEstatisticas
}

console.log(objeto1.obterEstatisticas(objeto1.numeros))