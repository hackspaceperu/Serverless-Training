const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')
// const models = require('./index')

class CancionListaReproduccion {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(crcNum,file,listaReproduccionModel,cancionModel) {
    this.crcNum = crcNum
    this.file = file
    this.listaReproduccionModel = listaReproduccionModel
    this.cancionModel = cancionModel
  }

  addCancionListaReproduccion(idListaReproduccion,idCancion){
    const cancionesListaReproduccion = utils.loadJson(this.file)
    const listaReproduccion=this.listaReproduccionModel.getListaReproduccionByID(idListaReproduccion)
    const cancion=this.cancionModel.getCancionByID(idCancion)
    
    if(listaReproduccion && cancion){
      //console.log(listaReproduccion)
      const id=crc32.buf(
        listaReproduccion.id.toString()
        + cancion.id.toString()
        , this.crcNum)

      const duplicateCancionListaReproduccion = cancionesListaReproduccion.find((cancionListaReproduccion) => cancionListaReproduccion.id === id)
      
      if (!duplicateCancionListaReproduccion) {
        const cancionListaReproduccion={
          id,
          listaReproduccion:listaReproduccion.id,
          cancion:cancion.id
        }
        cancionesListaReproduccion.push(cancionListaReproduccion)
        utils.saveJson(cancionesListaReproduccion,this.file)
        console.log(chalk.green.inverse('New cancionListaReproduccion added!'))
        return cancionListaReproduccion
      }else {
        console.log(chalk.red.inverse('CancionListaReproduccion already in!'))
        return 
      }
    }else{
      return
      //console.log(chalk.red.inverse('ListaReproduccion not found!'))
    }    
  }

  // updateCancionListaReproduccion(idListaReproduccion, idCancion){
  //   const cancionListaReproduccion = utils.loadJson(this.file)
  //   const listaReproduccion=this.listaReproduccionModel.getListaResproduccionByID(idListaReproduccion)
  //   const cancion=this.cancionModel.getCancionByID(idCancion)
    
  //   if(listaReproduccion && cancion){
  //     //console.log(listaReproduccion)
  //     const id=crc32.buf(
  //       listaReproduccion.id.toString()
  //       + cancion.id.toString()
  //       , this.crcNum)
        
  //     const index = cancionListaReproduccion.findIndex((cancionListaReproduccion) => cancionListaReproduccion.id === id)
  //     if (index>-1) {
  //       cancionListaReproduccion[index].duracion=duracion
  //       cancionListaReproduccion[index].genero=genero
  //       utils.saveJson(cancionListaReproduccion,this.file)
  //       console.log(chalk.green.inverse('CancionListaReproduccion updated!'))
  //       return cancionListaReproduccion[index]
  //     }else {
  //       console.log(chalk.red.inverse('CancionListaReproduccion not found!'))
  //       return
  //     }
  //   }
  //   return
  // }
  
  removeCancionListaReproduccion(idListaReproduccion, idCancion){
    const cancionesListaReproduccion = utils.loadJson(this.file)
    const id=crc32.buf(
      idListaReproduccion.toString()
      + idCancion.toString()
      , this.crcNum)
    const cancionesListaReproduccionToKeep = cancionesListaReproduccion.filter((cancionListaReproduccion) => cancionListaReproduccion.id !== id)

    if (cancionesListaReproduccion.length > cancionesListaReproduccionToKeep.length) {
        console.log(chalk.green.inverse('CancionListaReproduccion removed!'))
        utils.saveJson(cancionesListaReproduccionToKeep,this.file)
    } else {
        console.log(chalk.red.inverse('No cancionListaReproduccion found!'))
    }    
  }

  listCancionesListaReproduccion(){
    const cancionesListaReproduccion = utils.loadJson(this.file)
    
    console.log(chalk.inverse('Tus canciones de listas de reproduccion'))

    return cancionesListaReproduccion
    /*cancionListaReproduccion.forEach((cancionesListaReproduccion) => {
        console.log(cancionListaReproduccion)
    })*/
  }

  readCancionListaReproduccion(idListaReproduccion, idCancion){
    const cancionesListaReproduccion = utils.loadJson(this.file)
    const id=crc32.buf(
      idListaReproduccion.toString()
      + idCancion.toString()
      , this.crcNum)
    
    const cancionListaReproduccion = cancionesListaReproduccion.find((cancionListaReproduccion) => cancionListaReproduccion.id === id)

    if (cancionListaReproduccion) {
        //console.log(chalk.inverse(cancionListaReproduccion))
        return cancionListaReproduccion
        //console.log(cancionListaReproduccion)
    } else {
        console.log(chalk.red.inverse('CancionListaReproduccion not found!'))
        return
    }
  }

  getCancionListaReproduccionByID(id){
    const cancionesListaReproduccion = utils.loadJson(this.file)
    const cancionListaReproduccion = cancionesListaReproduccion.find((cancionListaReproduccion) => cancionListaReproduccion.id === id)
    if (cancionListaReproduccion) {
        //console.log(chalk.inverse(cancion))
        return cancionListaReproduccion
        //console.log(cancion)
    } else {
        console.log(chalk.red.inverse('CancionListaReproduccion not found!'))
        return
    }
  }
}

module.exports = {CancionListaReproduccion}