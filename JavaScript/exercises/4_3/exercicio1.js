//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
//seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let letras = "";

for (let indicador = 0; indicador < n; indicador = indicador + 1) {
    letras = letras + "*";
   
}

for (let indicador = 0; indicador < n; indicador++) {
    console.log(letras);    
}
