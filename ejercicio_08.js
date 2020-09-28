var numeros = [1,2,3,4,5,6,7,8,9,10,11];

function even(nums){

    return nums % 2 == 0 ; 
}

function cuantosCumplen(condicion,arrayNum){
    return arrayNum.filter(num => condicion(num)).length;
}   
console.log(cuantosCumplen(even,numeros));      