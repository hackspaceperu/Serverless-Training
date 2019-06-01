const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')
// const models = require('./index')

class CancionEscuchada {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(crcNum,file,usuarioModel,cancionModel) {
    this.crcNum = crcNum
    this.file = file
    this.usuarioModel = usuarioModel
    this.cancionModel = cancionModel
  }

  addCancionEscuchada(correoUsuario, idCancion, fecha){
    const cancionesEscuchadas = utils.loadJson(this.file)
    const usuario=this.usuarioModel.readUsuario(correoUsuario)
    const cancion=this.cancionModel.getCancionByID(idCancion)
    
    if(usuario && cancion){
      //console.log(autor)
      const id=crc32.buf(
        usuario.id.toString()
        + cancion.id.toString()
        + fecha
        , this.crcNum)

      const duplicateCancionEscuchada = cancionesEscuchadas.find((cancionEscuchada) => cancionEscuchada.id === id)
      
      if (!duplicateCancionEscuchada) {
        const cancionEscuchada={
          id,
          usuario:usuario.id,
          cancion:cancion.id,
          fecha
        }
        cancionesEscuchadas.push(cancionEscuchada)
        utils.saveJson(cancionesEscuchadas,this.file)
        console.log(chalk.green.inverse('New cancionEscuchada added!'))
        return cancionEscuchada
      }else {
        console.log(chalk.red.inverse('CancionEscuchada already in!'))
        return 
      }
    }else{
      return
      //console.log(chalk.red.inverse('Autor not found!'))
    }    
  }

  // updateCancionEscuchada(nombre, nombresAutor, apellidosAutor,nombreAlbum,duracion,genero){
  //   const cancionesEscuchadas = utils.loadJson(this.file)
  //   const autor=this.autorModel.readAutor(nombresAutor,apellidosAutor)
  //   const album=this.albumModel.readAlbum(nombreAlbum,nombresAutor,apellidosAutor)
    
  //   if(autor && album){
  //     //console.log(autor)
  //     const id=crc32.buf(
  //       nombre//.toString()
  //       + autor.id.toString()
  //       + album.id.toString()
  //       , this.crcNum)
        
  //     const index = cancionesEscuchadas.findIndex((cancionEscuchada) => cancionEscuchada.id === id)
  //     if (index>-1) {
  //       cancionesEscuchadas[index].duracion=duracion
  //       cancionesEscuchadas[index].genero=genero
  //       utils.saveJson(cancionesEscuchadas,this.file)
  //       console.log(chalk.green.inverse('CancionEscuchada updated!'))
  //       return cancionesEscuchadas[index]
  //     }else {
  //       console.log(chalk.red.inverse('CancionEscuchada not found!'))
  //       return
  //     }
  //   }
  //   return
  // }
  
  removeCancionEscuchada(correoUsuario, idCancion, fecha){
    const cancionesEscuchadas = utils.loadJson(this.file)
    const usuario=crc32.buf(
      correoUsuario,
      this.crcNum)
    const id=crc32.buf(
      usuario.toString()
      + idCancion.toString()
      + fecha
      , this.crcNum)
    const cancionesEscuchadasToKeep = cancionesEscuchadas.filter((cancionEscuchada) => cancionEscuchada.id !== id)

    if (cancionesEscuchadas.length > cancionesEscuchadasToKeep.length) {
        console.log(chalk.green.inverse('CancionEscuchada removed!'))
        utils.saveJson(cancionesEscuchadasToKeep,this.file)
    } else {
        console.log(chalk.red.inverse('No cancionEscuchada found!'))
    }    
  }

  listCancionEscuchadaes(){
    const cancionesEscuchadas = utils.loadJson(this.file)
    
    console.log(chalk.inverse('Your cancionesEscuchadas'))

    return cancionesEscuchadas
    /*cancionesEscuchadas.forEach((cancionEscuchada) => {
        console.log(cancionEscuchada)
    })*/
  }

  readCancionEscuchada(correoUsuario, idCancion,fecha){
    const cancionesEscuchadas = utils.loadJson(this.file)
    const usuario=crc32.buf(
      correoUsuario
      , this.crcNum)
    const id=crc32.buf(
      usuario.toString()
      + idCancion.toString()
      + fecha
      , this.crcNum)
    
    const cancionEscuchada = cancionesEscuchadas.find((cancionEscuchada) => cancionEscuchada.id === id)

    if (cancionEscuchada) {
        //console.log(chalk.inverse(cancionEscuchada))
        return cancionEscuchada
        //console.log(cancionEscuchada)
    } else {
        console.log(chalk.red.inverse('CancionEscuchada not found!'))
        return
    }
  }

  getCancionEscuchadaByID(id){
    const cancionesEscuchadas = utils.loadJson(this.file)
    const cancion = cancionesEscuchadas.find((cancion) => cancion.id === id)
    if (cancion) {
        //console.log(chalk.inverse(album))
        return cancion
        //console.log(album)
    } else {
        console.log(chalk.red.inverse('CancionEscuchada not found!'))
        return
    }
  }
}

module.exports = {CancionEscuchada}