# Reto

Se uso **yargs** para generar las consultas desde la consola.

## Install

```bash
npm install
```

Or

```bash
yarn install
```

## Sentencias de ejemplo

Si quiere saber la descripción de los comandos hacer:

```bash
node index.js --help
```

Si quiere saber la descripción de un comando en específico hacer:

```bash
node index.js nombre-del-comando --help
```

Notar que ya no se usa -- al inicio.

### Modelo Autor

```bash
node index.js addAutor --nombres="Joel" --apellidos="Valverde" --nacionalidad="peruana"
node index.js updateAutor --nombres="Joel" --apellidos="Valverde" --nacionalidad="española"
node index.js readAutor --nombres="Joel" --apellidos="Valverde"
node index.js getAutorByID --id=838980758
node index.js listAutores
node index.js removeAutor --nombres="Joel" --apellidos="Valverde"
```

### Modelo Album

```bash
node index.js addAlbum --nombre="Silver" --nombresAutor="Rogger" --apellidosAutor="Valverde" --fechaLanzamiento="31-05-2019"
node index.js updateAlbum --nombre="Silver" --nombresAutor="Rogger" --apellidosAutor="Valverde" --fechaLanzamiento="01-06-2019"
node index.js readAlbum --nombre="Silver" --nombresAutor="Rogger" --apellidosAutor="Valverde"
node index.js getAlbumByID --id=-1560119599
node index.js listAlbumes
node index.js removeAlbum --nombre="Silver" --nombresAutor="Rogger" --apellidosAutor="Valverde"
```

### Modelo Cancion

```bash
node index.js addCancion --nombre="Equis Di" --nombresAutor="Rogger" --apellidosAutor="Valverde" --nombreAlbum="Platino" --duracion=185 --genero="rock"
node index.js updateCancion --nombre="Equis Di" --nombresAutor="Rogger" --apellidosAutor="Valverde" --nombreAlbum="Platino" --duracion=200 --genero="salsa"
node index.js readCancion --nombre="Equis Di" --nombresAutor="Rogger" --apellidosAutor="Valverde" --nombreAlbum="Platino"
node index.js getCancionByID --id=1886396698
node index.js listCanciones
node index.js removeCancion --nombre="Equis Di" --nombresAutor="Rogger" --apellidosAutor="Valverde" --nombreAlbum="Platino"
```

### Modelo Usuario

```bash
node index.js addUsuario --nombres="Manuel" --apellidos="Dominguez" --correo="m.dominguez@gmail.com"
node index.js updateUsuario --nombres="Marcos" --apellidos="Dominguez" --correo="m.dominguez@gmail.com"
node index.js readUsuario --correo="m.dominguez@gmail.com"
node index.js getUsuarioByID --id=840235758
node index.js listUsuarios
node index.js removeUsuario --correo="m.dominguez@gmail.com"
```

### Modelo Cancion Escuchada

```bash
node index.js addCancionEscuchada --correoUsuario="c.chavez@gmail.com" --idCancion=-588455337 --fecha="31-05-2019"
node index.js readCancionEscuchada --correoUsuario="c.chavez@gmail.com" --idCancion=-588455337 --fecha="31-05-2019"
node index.js getCancionEscuchadaByID --id=-1134174353
node index.js listCancionesEscuchadas
node index.js removeCancionEscuchada --correoUsuario="c.chavez@gmail.com" --idCancion=-588455337 --fecha="31-05-2019"
```

### Modelo Lista de Reproduccion

```bash
node index.js addListaReproduccion --nombre="Nuevas Canciones" --correoUsuario="c.chavez@gmail.com"
node index.js readListaReproduccion --nombre="Nuevas Canciones" --correoUsuario="c.chavez@gmail.com"
node index.js getListaReproduccionByID --id=-1358209147
node index.js listListasReproduccion
node index.js removeListaReproduccion --nombre="Nuevas Canciones" --correoUsuario="c.chavez@gmail.com"
```

### Modelo Cancion de Lista de Reproduccion

```bash
node index.js addCancionListaReproduccion --idListaReproduccion=1363994337 --idCancion=1943231592
node index.js readCancionListaReproduccion --idListaReproduccion=1363994337 --idCancion=1943231592
node index.js getCancionListaReproduccionByID --id=1961981889
node index.js listCancionesListaReproduccion
node index.js removeCancionListaReproduccion --idListaReproduccion=1363994337 --idCancion=1943231592
```

## Observaciones

* Se puede agregar la consulta a las relaciones entre los modelos
* Automatizar las pruebas, usando jest por ejemplo.
* Algunos modelos no poseen update porque sus valores se relacionan con el generador del id.
* Se hizo las queries y mutations mayormente mediante consulta de valores strings en vez de ids numéricos solo para evitar q las pruebas sean a cada rato revisando el id de los valores guardados.
* Se podría agregar otras consultas de filtro.