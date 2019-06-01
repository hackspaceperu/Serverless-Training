const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')
// const models = require('./index')

class Cancion {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(crcNum,file,autorModel,albumModel) {
    this.crcNum = crcNum
    this.file = file
    this.autorModel = autorModel
    this.albumModel = albumModel
  }

  addCancion(nombre, nombresAutor, apellidosAutor,nombreAlbum,duracion,genero){
    const canciones = utils.loadJson(this.file)
    const autor=this.autorModel.readAutor(nombresAutor,apellidosAutor)
    const album=this.albumModel.readAlbum(nombreAlbum,nombresAutor,apellidosAutor)
    
    if(autor && album){
      //console.log(autor)
      const id=crc32.buf(
        nombre//.toString()
        + autor.id.toString()
        + album.id.toString()
        , this.crcNum)

      const duplicateCancion = canciones.find((cancion) => cancion.id === id)
      
      if (!duplicateCancion) {
        const cancion={
          id,
          nombre,
          autor:autor.id,
          album:album.id,
          duracion,
          genero
        }
        canciones.push(cancion)
        utils.saveJson(canciones,this.file)
        console.log(chalk.green.inverse('New cancion added!'))
        return cancion
      }else {
        console.log(chalk.red.inverse('Cancion already in!'))
        return 
      }
    }else{
      return
      //console.log(chalk.red.inverse('Autor not found!'))
    }    
  }

  updateCancion(nombre, nombresAutor, apellidosAutor,nombreAlbum,duracion,genero){
    const canciones = utils.loadJson(this.file)
    const autor=this.autorModel.readAutor(nombresAutor,apellidosAutor)
    const album=this.albumModel.readAlbum(nombreAlbum,nombresAutor,apellidosAutor)
    
    if(autor && album){
      //console.log(autor)
      const id=crc32.buf(
        nombre//.toString()
        + autor.id.toString()
        + album.id.toString()
        , this.crcNum)
        
      const index = canciones.findIndex((cancion) => cancion.id === id)
      if (index>-1) {
        canciones[index].duracion=duracion
        canciones[index].genero=genero
        utils.saveJson(canciones,this.file)
        console.log(chalk.green.inverse('Cancion updated!'))
        return canciones[index]
      }else {
        console.log(chalk.red.inverse('Cancion not found!'))
        return
      }
    }
    return
  }
  
  removeCancion(nombre, nombresAutor, apellidosAutor,nombreAlbum){
    const canciones = utils.loadJson(this.file)
    const autor=crc32.buf(
      nombresAutor//.toString()
      + apellidosAutor//.toString()
      , this.crcNum)
    const album=crc32.buf(
      nombreAlbum//.toString()
      + autor//.toString()
      , this.crcNum)
    const id=crc32.buf(
      nombre//.toString()
      + autor.toString()
      + album.toString()
      , this.crcNum)
    const cancionesToKeep = canciones.filter((cancion) => cancion.id !== id)

    if (canciones.length > cancionesToKeep.length) {
        console.log(chalk.green.inverse('Cancion removed!'))
        utils.saveJson(cancionesToKeep,this.file)
    } else {
        console.log(chalk.red.inverse('No cancion found!'))
    }    
  }

  listCanciones(){
    const canciones = utils.loadJson(this.file)
    
    console.log(chalk.inverse('Your canciones'))

    return canciones
    /*canciones.forEach((cancion) => {
        console.log(cancion)
    })*/
  }

  readCancion(nombre, nombresAutor, apellidosAutor,nombreAlbum){
    const canciones = utils.loadJson(this.file)
    const autor=crc32.buf(
      nombresAutor//.toString()
      + apellidosAutor//.toString()
      , this.crcNum)
    const album=crc32.buf(
      nombreAlbum//.toString()
      + autor//.toString()
      , this.crcNum)
    const id=crc32.buf(
      nombre//.toString()
      + autor.toString()
      + album.toString()
      , this.crcNum)
    
    const cancion = canciones.find((cancion) => cancion.id === id)

    if (cancion) {
        //console.log(chalk.inverse(cancion))
        return cancion
        //console.log(cancion)
    } else {
        console.log(chalk.red.inverse('Cancion not found!'))
        return
    }
  }

  getCancionByID(id){
    const canciones = utils.loadJson(this.file)
    const cancion = canciones.find((cancion) => cancion.id === id)
    if (cancion) {
        //console.log(chalk.inverse(album))
        return cancion
        //console.log(album)
    } else {
        console.log(chalk.red.inverse('Cancion not found!'))
        return
    }
  }
}

module.exports = {Cancion}