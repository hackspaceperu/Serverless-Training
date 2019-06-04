/*
 * Inicio
 * Nombre: Diego Damián
 * Correo: diegoaarondv@gmail.com 
 */

let array = [];

const singers = ['justin', 'drake', 'posty', 'charlie'];


//CREATE
array.push(...singers);

console.log(array);
console.log("#########");

//READ
let printArray = () => array.map((elemento, indice) => {
    console.log(`La posición ${indice} es ${elemento}`)
})

printArray();
console.log("#########");

//UPDATE
let elementAttributes = {
    name: 'justin',
    age: '22',
    nationality: 'canada',
    hobby: 'singer'
};

const elementAttributes2 = {...elementAttributes,age: '24'};

console.log(elementAttributes2);
console.log("#########");

//DELETE
const array3 = ['justin', 'drake', 'post', 'savage'];

let deleteAnElement = array3.filter(item => {
    return item !== 'drake';
})

console.log(deleteAnElement);

