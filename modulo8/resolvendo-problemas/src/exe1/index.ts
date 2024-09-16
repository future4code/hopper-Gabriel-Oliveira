//Considere que a gente só possa fazer três operações com string: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.

function isOneEdit(word1: string, word2: string): any {
  if (Math.abs(word2.length - word1.length) > 1) {
    return false;
  }
  if (word1.length > word2.length) {
    return word1.includes(word2);
  }
  if (word2.length > word1.length) {
    return word2.includes(word1);
  }

  let difBetWords = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      difBetWords++;
    }
    return difBetWords === 1;
  }
}
console.log(isOneEdit("gabriel", "gabrieli"));
