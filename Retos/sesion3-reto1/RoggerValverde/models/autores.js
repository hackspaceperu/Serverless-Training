const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')

class Autor {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(crcNum,file) {
    this.crcNum = crcNum
    this.file = file
  }

  addAutor(nombres, apellidos, nacionalidad){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , this.crcNum)
    const duplicateAutor = autores.find((autor) => autor.id === id)

    if (!duplicateAutor) {
      const autor={
        id,
        nombres,
        apellidos,
        nacionalidad
      }
      autores.push(autor)
      utils.saveJson(autores,this.file)
      console.log(chalk.green.inverse('New autor added!'))
      return autor
    }else {
      console.log(chalk.red.inverse('Autor already in!'))
      return
    }
  }

  updateAutor(nombres, apellidos, nacionalidad){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , this.crcNum)
    const index = autores.findIndex((autor) => autor.id === id)

    if (index>-1) {
      autores[index].nacionalidad=nacionalidad
      utils.saveJson(autores,this.file)
      console.log(chalk.green.inverse('Autor updated!'))
      return autores[index]
    }else {
      console.log(chalk.red.inverse('Autor not found!'))
      return
    }
  }
  
  removeAutor(nombres,apellidos){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , this.crcNum)
    const autoresToKeep = autores.filter((autor) => autor.id !== id)

    if (autores.length > autoresToKeep.length) {
        console.log(chalk.green.inverse('Autor removed!'))
        utils.saveJson(autoresToKeep,this.file)
    } else {
        console.log(chalk.red.inverse('No autor found!'))
    }    
  }

  listAutores(){
    const autores = utils.loadJson(this.file)
    
    console.log(chalk.inverse('Your autores'))

    return autores
    /*autores.forEach((autor) => {
        console.log(autor)
    })*/
  }

  readAutor(nombres, apellidos){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , this.crcNum)
    
    const autor = autores.find((autor) => autor.id === id)

    if (autor) {
      return autor
    } else {
      console.log(chalk.red.inverse('Autor not found!'))
      return
    }
  }

  getAutorByID(id){
    const autores = utils.loadJson(this.file)
    const autor = autores.find((autor) => autor.id === id)
    if (autor) {
        //console.log(chalk.inverse(album))
        return autor
        //console.log(album)
    } else {
        console.log(chalk.red.inverse('Autor not found!'))
        return
    }
  }
}

module.exports = {Autor}