/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// if (confirm("Você gostaria de iniciar uma partida de BlackJack (21)?")) {
//    console.log("Seja Bem vindo ao jogo de BlackJack (21), Boa sorte!")
//    const cartaUmDoUser = comprarCarta();
//    const cartaDoisDoUser = comprarCarta();
//    const cartaUmDoComputador = comprarCarta();
//    const cartaDoisDoComputador = comprarCarta();
   
//    const valorUser = cartaUmDoUser.valor + cartaDoisDoUser.valor;
//    const valorComputador = cartaUmDoComputador.valor + cartaDoisDoComputador.valor;
   
//    console.log(`Cartas do Computador: ${cartaUmDoComputador.texto} e ${cartaDoisDoComputador.texto} Total: ${cartaUmDoComputador.valor + cartaDoisDoComputador.valor}.`);
//    console.log(`Cartas do User: ${cartaUmDoUser.texto} e ${cartaDoisDoUser.texto} Total: ${cartaUmDoUser.valor + cartaDoisDoUser.valor}.`);
   
//    if (valorUser > valorComputador) {
//       console.log("Parabéns, você foi o vencedor!")
//       console.log("O jogo acabou...")
//    } else if (valorComputador > valorUser) {
//       console.log("Que pena, o computador ganhou!")
//       console.log("O jogo acabou...")
//    } else if (valorUser == valorComputador) {
//       console.log("Empate!")
//       console.log("O jogo acabou...")
//    } else {
//       console.log("O jogo acabou...")
//    }
// } else {
//    console.log("Que pena!")
// }

