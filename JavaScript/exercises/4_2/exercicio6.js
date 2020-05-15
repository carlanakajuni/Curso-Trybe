//Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (let indicador = 0; indicador < numbers.length; indicador = indicador + 1) {
    if (numbers[indicador] % 2 !== 0) {  //ou poderia usar === 1 para achar os ímpares
        odd = odd + 1;
        console.log(numbers[indicador])
    } else  {
        console.log('nenhum valor ímpar encontrado');
    }
}
console.log("Total de ímpares é " + odd);