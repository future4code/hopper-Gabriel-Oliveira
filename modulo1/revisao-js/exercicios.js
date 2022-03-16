// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (i, ii) {
        if (i > ii) {
            return 1
        } if (i < ii) {
            return -1
        }
        return 0
    })
}
retornaArrayOrdenado(array)


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = [];
    for (let numero of array) {
        if (numero % 2 == 0) {
            numerosPares.push(numero);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesAoQuadrado = []
    for (const numeros of array) {
        if (numeros % 2 == 0) {
            let paresAoQuadrado = numeros * numeros
            numerosParesAoQuadrado.push(paresAoQuadrado)


        }
    }
    return numerosParesAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (const numeros of array) {
        if (numeros > maior) {
            maior = numeros
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeroMaior
    if (num1 > num2) {
        numeroMaior = num1
    } else {
        numeroMaior = num2
    }
    let numeroMenor
    if (num1 < num2) {
        numeroMenor = num1
    } else {
        numeroMenor = num2
    }

    return {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: numeroMaior % numeroMenor === 0,
        diferenca: numeroMaior - numeroMenor
    }
}
retornaObjetoEntreDoisNumeros(num1, num2)


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares2 = [];

    for (let i = 0; n > numerosPares2.length; i++) {
        if (i % 2 == 0) {
            numerosPares2.push(i)
        }
    }

    return numerosPares2;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC) {
        return "Equilátero"
    } else if(ladoA == ladoC || ladoA == ladoB || ladoB == ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
   
