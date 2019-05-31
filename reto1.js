const numbers = [2,5,4,6,10,4,0,-8,8,16];
let numbers_size = numbers.length;
let hashmap = {};
let answer = [];
const n = 8;

function recursionOn(tam) {

    let target = n - numbers[tam-1];

    if (tam<=0)
        return answer;

    if(!hashmap[target])
    {
        hashmap[numbers[tam-1]] = 1;
    }

    else{
        let array = [numbers[tam-1],target];
        answer.push(array);
    }
    return (recursionOn(tam-1))
}

console.log(recursionOn(numbers_size));
