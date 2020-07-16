// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que vai receber uma string como parâmetro.
// Sua função deverá procurar pela letra x em uma string qualquer que você 
// determinar e substituir pela string que você passou como parâmetro.
// Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso,
// contendo cinco strings com suas principais skills.

const troca = (string) => {
  const frase = 'Tryber x aqui!'
  let newString = frase.replace('x', 'Carla');
  return newString
}
// console.log(troca('Hugo'))

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro.
// Essa função deve concatenar as skills do array global à string que foi passada para a 
// Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve
// retornar essa nova string.
// Exemplo:
// "Tryber x aqui!
// Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...
// #goTrybe".

let skills = ['HTML', 'JavaScript', 'CSS', 'GitHub', 'Frameworks'];
const retornaSkills = (string) => {
  skills = skills.sort();
  return `${troca(string)}
  
  Minhas cinco principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  ${skills[3]}
  ${skills[4]}
  
  #Go Trybe!! `;
}

console.log(retornaSkills());
