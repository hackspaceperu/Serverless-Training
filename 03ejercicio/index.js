const Cancion = require ('./Cancion'),
      DB = require ('./DB')

let init = new DB([])
init.canciones
    .push(new Cancion('cancion',4.3, {name: 'Luis', pais : 'Perú'}, {name :'Mejorando',fecha : '2019-05-03'}))

console.log(init.canciones)
