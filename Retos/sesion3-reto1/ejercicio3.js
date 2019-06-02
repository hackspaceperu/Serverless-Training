class Actor {
    constructor(nombre, apellido, fechaNac, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.rol = rol;
    }
}

class Director {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Pelicula {
    constructor(genero, titulo, duracion, actores, director) {
        this.genero = genero;
        this.titulo = titulo;
        this.duracion = duracion;
        this.actor = new Actor(Actor.nombre, Actor.apellido, Actor.fechaNac, Actor.rol);
        this.director = new Director(Director.nombre, Director.apellido);
    }
}
class Pago {
    constructor(fechaPago, monto, estatus){
        this.fechaPago = fechaPago;
        this.monto = monto;
        this.estatus = estatus;
    }
}
class Cliente {
    constructor(email, plan, pago) {
        this.email = email;
        this.plan = plan;
        this.pago = new Pago(Pago.fechaPago, Pago.monto, Pago.estatus);
    }
}

class db {
    constructor(peliculas, clientes) {
        this.peliculas = peliculas;
        this.clientes = clientes;
    }
}

let NetflixDB;

function Netflix () {
    return {
        init: function () {
            NetflixDB = new db([],[]);
        },
        agregarPelicula: function (genero, titulo, duracion, actor, director) {
            NetflixDB.peliculas.push(new Pelicula(genero, titulo, duracion, actor, director));
        },
        agregarCliente: function (email, plan, pago) {
            NetflixDB.clientes.push(new Cliente(email, plan, pago));
        }

    }
}

let NetflixInstance = Netflix();

NetflixInstance.init();

NetflixInstance.agregarPelicula('Acción', 'Peli uno', 2, {nombre: 'Pancho', apellido: 'Huaman', fechaNac: '12/12/1970', rol: 'Protagonista'}, {nombre: 'María', apellido: 'Rodriguez'});
NetflixInstance.agregarPelicula('Comedia', 'Pelicula dos', 4, {nombre: 'Manuel', apellido: 'Rojas', fechaNac: '12/12/1988', rol: 'Reparto'}, {nombre: 'Pepe', apellido: 'Aquino'});

NetflixInstance.agregarCliente('cliente1@gmail.com', 'Básico', {fechaPago: '01/06/2019', monto: 15.00, estatus: 'solvente'});
NetflixInstance.agregarCliente('cliente2@gmail.com', 'Premium', {fechaPago: '01/05/2019', monto: 35.00, estatus: 'no solvente'});

console.log(NetflixDB);