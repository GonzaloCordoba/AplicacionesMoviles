var numeros = [1,2,3,4,5,6,7,8,9,10];


function algunoEsPar(nums){

   return nums.some(i => i % 2 == 0); 

}
console.log(algunoEsPar(numeros));