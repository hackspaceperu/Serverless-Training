// Nombres: Dennis Huillca Portilla
// Correo: dennisbot@gmail.com
// las parejas de números de sumen 8; sin usar loop.

let set = new Set();

function lookForCouples(numeros, walk, dist) {
  if (walk + 1 == numeros.length || dist == numeros.length) return;
  if (numeros[walk] + numeros[dist] == 8)
    set.add([numeros[walk], numeros[dist]].join(', '));
  lookForCouples(numeros, walk, dist + 1);
  lookForCouples(numeros, walk + 1, dist + 1);
}

let numeros = [4, 6, 2, -6, 10, 14, -2, 4]
lookForCouples(numeros, 0, 1);
console.log(set);
