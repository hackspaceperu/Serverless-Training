/**
 * @author Dimacros
 * 
 * Problema:
 * Las parejas de números que sumen 8; sin usar un loop.
 * 
 * Ejemplo: [3, 6, 2, -6, 10, -2, 0, 8, 4, 4]
 * 
 * return [ [ 6, 2 ], [ 10, -2 ], [ 0, 8 ], [4, 4] ]
 */

const numbers = [3, 6, 2, -6, 10, -2, 0, 8, 4, 4];

function sumPairsEquals(total, numbers)
{
    const maxLenghtAllowed = 2;

    if (numbers.length < maxLenghtAllowed) {
        return accumulator();
    }

    [a, b, ...etc] = numbers;

    if (a + b === total) {
        accumulator().push([a, b]);
    }

    return sumPairsEquals(total, reduceLenght(numbers, 1));
}

function reduceLenght(numbers, length)
{
    return numbers.slice(length);
}

function accumulator()
{
    if( typeof accumulator.add === 'undefined' ) {
        accumulator.add = [];
    }

    return accumulator.add;
}

console.log(
    sumPairsEquals(8, numbers)
);
