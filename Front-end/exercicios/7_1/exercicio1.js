// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o 
// produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. 
// Spoiler: É possível resolver com uma linha.

let resultado = 1; // a variável precisa ser global (fora da function) senão será sempre igual a 1;

function fatorial(num) {
  for (let i = num; i >= 1; i -= 1) {
    resultado = resultado * i
  }
  return resultado
}
console.log(fatorial(4))
