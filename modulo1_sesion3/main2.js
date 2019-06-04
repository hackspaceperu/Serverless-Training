class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad;
    }

    mostrarSaludo() {
        return 'Hola';
    }
}

const carlos = new Usuario('Diego', 27);

const alejandro = new Usuario('Alejandro', 30);

console.log(carlos.nombre);
console.log(carlos.edad);
console.log(alejandro.mostrarSaludo());
//el constructor, es una función que se ejecuta de forma automatica cuando se crea una nueva instancia de una clase.

//la palabra reservada "this" significa este para el contexto de clases
