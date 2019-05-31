const numeros = [4, 6, 2, -6, 14];

// Las parejas de numeros que sumen 8; sin usar un loop.

// [6,2]


function sumanOcho(arrNum) {

    if(arrNum.length === 0) {
        return 0;
    }
    if(arrNum.length === 1) {
        return 0;
    }

    if (arrNum[0] + arrNum[1] === 8) {
        arrNum.splice(0, 1);
        return 1 + sumanOcho(arrNum);
    }
    arrNum.splice(0, 1);
    return 0 + sumanOcho(arrNum);
}

console.log(sumanOcho(numeros));