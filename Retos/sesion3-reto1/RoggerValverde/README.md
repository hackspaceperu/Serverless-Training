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
node index.js addAutor --nombres="Rogger" --apellidos="Valverde" --nacionalidad="peruana"
node index.js updateAutor --nombres="Rogger" --apellidos="Valverde" --nacionalidad="española"
node index.js readAutor --nombres="Rogger" --apellidos="Valverde"
node index.js listAutores
node index.js removeAutor --nombres="Rogger" --apellidos="Valverde"
```

### Modelo Album

```bash
node index.js addAlbum --nombre="Nuevo" --nombresAutor="Rogger" --apellidosAutor="Valverde" --fechaLanzamiento="31-05-2019"
node index.js updateAlbum --nombres="Rogger" --apellidos="Valverde" --nacionalidad="española"
node index.js readAlbum --nombres="Rogger" --apellidos="Valverde"
node index.js listAlbumes
node index.js removeAlbum --nombres="Rogger" --apellidos="Valverde"
```

![Calendario Backend](https://hackspaceperu.github.io/Serverless-Training/img/Calendario-Backend.png)

## Temario

**Modulo I: Introducción**\
S1S1 - Sesión 1.1: Introducción al Curso **(Presencial)**

* Motivación del curso, conocimientos previos requeridos
* Entregables y expectativas
* Conceptos Básicos
  * Backend, Frontend, Devops
  * Servidor, Cliente
  * Protocolos, estándares, convenciones

