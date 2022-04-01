``` js

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let somaDeVezes = 0
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      somaDeVezes = somaDeVezes + 1
    }
  }
if(somaDeVezes === 0) {
  return " O Número não foi encontrado"
} else {
  return (`O número ${numero} aparece ${somaDeVezes}x`)
}
}

```