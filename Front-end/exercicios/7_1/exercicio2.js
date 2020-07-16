// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

function longestWord(phrase) {
  let phraseArr = phrase.split(' '); // split cria uma array de strings
  let bigger = phraseArr[0];
  for(let i = 1; i < phraseArr.length; i += 1) {
    if(phraseArr[i].length > bigger.length) { // se o tamanho da string na posição [i](1) for maior que a string na posição 0
      bigger = phraseArr[i] // então a string se torna a maior da array
    }
  }
  return bigger;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
