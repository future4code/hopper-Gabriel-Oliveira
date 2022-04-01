``` js

function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
let vezesDeRepeticao = 0
for(let i of arrayDeNumeros){
  if(i == numeroEscolhido){
    vezesDeRepeticao++
  }
}
if(vezesDeRepeticao == 0){
  return "Número não encontrado"
} else {
  return `O número ${numeroEscolhido} aparece ${vezesDeRepeticao}x`
}

```