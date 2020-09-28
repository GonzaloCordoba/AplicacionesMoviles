var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var filtro = 3;

function contiene(filt, arrayNum){
    return arrayNum.some(element=>element == filt );
}

console.log(contiene(filtro,numeros));