var numeros = [1,2,3,4,4,8,1];

function hayAlgunNegativo(num){
    return num < 0;
}

var resultado = numeros.some(hayAlgunNegativo);

console.log(resultado);