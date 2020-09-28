var notas = [4,4,3,4,4,4];

var resultado = notas.every(aprobado);

function aprobado(nums){

    return nums >= 4 ; 
}

console.log(resultado);

