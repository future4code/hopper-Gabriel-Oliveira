```js

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salarioMensal = 2000
let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
let somaSalarioTotal = comissao + salarioMensal
return somaSalarioTotal
}

 ```