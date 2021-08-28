const number = [1,2,3,4,5,6,7,8,9];
const calculate = function(x){
    return  x * 2
}
const newNumber = number.map(calculate );
console.log(newNumber);