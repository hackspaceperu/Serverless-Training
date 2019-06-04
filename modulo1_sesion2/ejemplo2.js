//

let objetoA = {
    name: 'Julio',
    edad: 23,
    ciudad: 'Lima'
};

let objetoB = {
    name: 'Julio',
    edad: 11,
    ciudad: 'Pisco'
};

let objetoC = {
    name: 'Julio',
    edad: 23
};

let objetoD = {
    name: 'Julio',
    edad: 23,
    ciudad: 'Lima'
};

function compara (obj1, obj2) {
    //1 -> mismas propiedades y valores
    //2 -> mismas propiedades pero valores son diferentes
    //3 -> no tiene las mismas propiedades
    let contador = 1;

    if(obj1.leng == obj2.leng) {
        contador = 3;
    } else if() {
        
    }

    for (let elemento in obj1) {
        console.log(elemento);
        console.log(obj1[elemento]);
        console.log(obj2[elemento]);

        console.log(obj1[elemento] == obj2[elemento]);
        if(obj1[elemento] === obj2[elemento]) {
        } else {
            contador += 1;
        }
    }

    console.log(contador);
}

compara(objetoA, objetoC);

