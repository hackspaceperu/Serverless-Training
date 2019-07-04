/**
 * @author Dimacros
 * 
 * Problema:
 * Las parejas de numeros que sumen 8; sin usar un loop.
 * 
 * Ejemplo: [4, 6, 2, -6, 10, -2, 0, 8, 4 ...]
 * 
 * return [ [ 6, 2 ], [ 10, -2 ], [ 0, 8 ] ]
 */

const numeros = [4, 6, 2, -6, 10, -2, 0, 8, 4];

const app = () => console.log(
    sumPairsEquals(8, numeros)
);

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

    return sumPairsEquals(total, movePointer(numbers, 1));
}

function movePointer(numbers, length)
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

//Run application
return app();
