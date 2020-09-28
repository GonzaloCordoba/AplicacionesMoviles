var notas = [[4,4,4,4],[4,4,4,4],[6,6,6,6]];

function aprobado(nums){

    return nums >= 4 ; 
}

function quienesAprobaron(alumNotas){

    return alumNotas.filter(alum => alum.every(aprobado));

}
console.log(quienesAprobaron(notas));