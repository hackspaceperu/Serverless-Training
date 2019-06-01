const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')
// const models = require('./index')

class ListaReproduccion {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(crcNum,file,usuarioModel) {
    this.crcNum = crcNum
    this.file = file
    this.usuarioModel = usuarioModel
  }

  addListaReproduccion(nombre, correoUsuario){
    const listasReproduccion = utils.loadJson(this.file)
    const usuario=this.usuarioModel.readUsuario(correoUsuario)
    if(usuario){
      //console.log(usuario)
      const id=crc32.buf(
        nombre//.toString()
        + usuario.id.toString()
        , this.crcNum)

      const duplicateListaReproduccion = listasReproduccion.find((listaReproduccion) => listaReproduccion.id === id)
      
      if (!duplicateListaReproduccion) {
        const listaReproduccion={
          id,
          nombre,
          usuario:usuario.id
        }
        listasReproduccion.push(listaReproduccion)
        utils.saveJson(listasReproduccion,this.file)
        console.log(chalk.green.inverse('New listaReproduccion added!'))
        return listaReproduccion
      }else {
        console.log(chalk.red.inverse('ListaReproduccion already in!'))
        return 
      }
    }else{
      return
      //console.log(chalk.red.inverse('Usuario not found!'))
    }    
  }

  updateListaReproduccion(nombre, correoUsuario){
    const listasReproduccion = utils.loadJson(this.file)
    const usuario=this.usuarioModel.readUsuario(nombresUsuario,apellidosUsuario)
    if(usuario){
      //console.log(usuario)
      const id=crc32.buf(
        nombre//.toString()
        + usuario.id.toString()
        , this.crcNum)
        
      const index = listasReproduccion.findIndex((listaReproduccion) => listaReproduccion.id === id)
      if (index>-1) {
        listasReproduccion[index].fechaLanzamiento=fechaLanzamiento
        utils.saveJson(listasReproduccion,this.file)
        console.log(chalk.green.inverse('ListaReproduccion updated!'))
        return listasReproduccion[index]
      }else {
        console.log(chalk.red.inverse('ListaReproduccion not found!'))
        return
      }
    }
    return
  }
  
  removeListaReproduccion(nombre, correoUsuario){
    const listasReproduccion = utils.loadJson(this.file)
    const usuario=crc32.buf(
      correoUsuario//.toString()
      , this.crcNum)
    const id=crc32.buf(
      nombre//.toString()
      + usuario.toString()
      , this.crcNum)
    const listasReproduccionToKeep = listasReproduccion.filter((listaReproduccion) => listaReproduccion.id !== id)

    if (listasReproduccion.length > listasReproduccionToKeep.length) {
        console.log(chalk.green.inverse('ListaReproduccion removed!'))
        utils.saveJson(listasReproduccionToKeep,this.file)
    } else {
        console.log(chalk.red.inverse('No listaReproduccion found!'))
    }    
  }

  listListasReproduccion(){
    const listasReproduccion = utils.loadJson(this.file)
    
    console.log(chalk.inverse('Your listasReproduccion'))

    return listasReproduccion
    /*listasReproduccion.forEach((listaReproduccion) => {
        console.log(listaReproduccion)
    })*/
  }

  readListaReproduccion(nombre, correoUsuario){
    const listasReproduccion = utils.loadJson(this.file)
    const usuario=crc32.buf(
      correoUsuario//.toString()
      , this.crcNum)
    const id=crc32.buf(
      nombre//.toString()
      + usuario.toString()
      , this.crcNum)
    
    const listaReproduccion = listasReproduccion.find((listaReproduccion) => listaReproduccion.id === id)

    if (listaReproduccion) {
        //console.log(chalk.inverse(listaReproduccion))
        return listaReproduccion
        //console.log(listaReproduccion)
    } else {
        console.log(chalk.red.inverse('ListaReproduccion not found!'))
        return
    }
  }

  getListaReproduccionByID(id){
    const listasReproduccion = utils.loadJson(this.file)
    const listaReproduccion = listasReproduccion.find((listaReproduccion) => listaReproduccion.id === id)
    if (listaReproduccion) {
        //console.log(chalk.inverse(listaReproduccion))
        return listaReproduccion
        //console.log(listaReproduccion)
    } else {
        console.log(chalk.red.inverse('ListaReproduccion not found!'))
        return
    }
  }
}

module.exports = {ListaReproduccion}