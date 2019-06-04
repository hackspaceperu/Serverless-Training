
//encontrar las parejas que sumen 8 ejemplo [6, 2]
//utilizar funciones recursivas - no loops (while, for)

//enviar la solución a través de gist - indicar nombre y correo
//plazo - hasta un minuto antes de iniciar la clase

//const numeros = [4, 6, 2, -6, 10];
//const numeros = [-4, 6, 12, 2, 4];
const numeros = [-4, 3, 5, 4, 1, 4, 2, 7, 9, 4, 8, 0];

let medidaArr = numeros.length - 1;

//función que valida si dos números suman 8. De darse el caso devuelve TRUE
function evaluaPar (n1, n2) {
    return (n1 + n2) == 8 ? true : false;
}

//función que realiza el recorrido del array
function recorreArr (valArrIzq, valArrDer) {

    let resultado = `El número ${numeros[valArrIzq]} - "posición ${valArrIzq}" y el número ${numeros[valArrDer]}  - "posición ${valArrDer}" suman 8`;

    if(valArrIzq == (medidaArr - 1) && valArrDer == medidaArr) {
        return evaluaPar(numeros[valArrIzq], numeros[valArrDer]) ? console.log(resultado) : "Array finalizado";
    }

    if(valArrDer == medidaArr) {
        if(evaluaPar(numeros[valArrIzq], numeros[valArrDer])) console.log(resultado);
        valArrIzq += 1;
        valArrDer = valArrIzq + 1 ;
        return recorreArr(valArrIzq, valArrDer);
    }

    if(evaluaPar(numeros[valArrIzq], numeros[valArrDer])) console.log(resultado);
    valArrDer ++;

    return recorreArr (valArrIzq, valArrDer);
};


recorreArr(0,1);