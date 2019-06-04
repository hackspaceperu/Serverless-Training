// Variables

const pi = 3.14;

const usuario = {
    name: 'jose'
}

usuario.name = 'Lucho';

//Operaciones

let numero = 0;

numero + 1;
numero - 1;
numero * 1;
numero / 1;
numero % 2;
numero ** 2; // potencia

numero++;
numero--;
numero -= 10; //numero = numero - 10

let nombre = 'Tony';
let apellido = 'Stark';

//Primera forma de concatenar caracteres
let nombreCompleto = nombre + " " + apellido;

//Segunda forma de concatenar caracteres
let nombreCompleto2 = `Mi nombre es ${nombre} ${apellido}` 

//Utilizar "var" declara la variable en el scope global lo cual no es bueno. 
//Usando "let" y "const" las variables tiene un scope local. lo que es mejor

let numeroA = 4;
let numeroB = 8;

console.log(numeroA == numeroB); //compara solo el tipo

console.log(numeroA === numeroB); //compara el valor y el tipo

let coloresA = ['azul', 'rojo'];

let coloresB = ['azul', 'rojo'];

let objetoFuera = {nombre: 'diego'};
let objetoFuera2 = {nombre: 'diego'};

function comparar () {
    console.log(objetoFuera.nombre === objetoFuera2.nombre);
}

let comparar2 = function () {
    console.log(objetoFuera.nombre === objetoFuera2.nombre);
}

let comparar3 = (objetoA, objetoB) => {
    console.log(objetoFuera.nombre === objetoFuera2.nombre);
}

comparar3(objetoFuera, objetoFuera2);

let pares = [2, 4, 6, 8];
let impares = [1, 3, 5, 7];

//spread operator

let union = [...pares, ...impares];

let preferencias = {color: 'azul', comida: 'ceviche'};
let usuario2 = {name: 'Diego', ...preferencias}

//let color = preferencias.color;
//let comida = preferencias.comida;

//desconstrucción para obtener ciertas partes de un objeto
let {color, comida} = preferencias;

console.log(color, comida);

let doblePares = pares.map(function(item) {
    return item*2;
});

let resultado = [];

for(let i = 0; i<pares.length; i++){
    resultado.push(pares[i] * 2);
}

(function () { //FUNCION IFI
    console.log('VIVO Y MUERO');
})();

console.log(resultado);