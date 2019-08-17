const numeros = [4, 6, 2, -6, 10, ];
//Las parejas de numeros que sumen 8, sin usar un loop.
//[6, 2]
let pares = numeros.reduce( 
    (pares, numero, index, array) => { 
        array.reduce(
            (numeroActual, numero, index2, array) => {
                let sumanOcho = ( index !== index2 ) && ( numeroActual + numero === 8 );
                if( sumanOcho ){
                    pares.push( [numeroActual, numero] );
                }
                return numeroActual;
            },
        numero);
        return pares;
    },
[] );

console.log(pares);
