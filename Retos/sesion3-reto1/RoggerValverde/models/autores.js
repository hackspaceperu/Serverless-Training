const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')

class Autor {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(file) {
    this.file = file
  }

  addAutor(nombres, apellidos, nacionalidad){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , 997)
    const duplicateAutor = autores.find((autor) => autor.id === id)

    if (!duplicateAutor) {
      autores.push({
        id,
        nombres,
        apellidos,
        nacionalidad
      })
      utils.saveJson(autores,this.file)
        console.log(chalk.green.inverse('New autor added!'))
    }else {
        console.log(chalk.red.inverse('Autor already in!'))
    }
  }

  updateAutor(nombres, apellidos, nacionalidad){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , 997)
    const index = autores.findIndex((autor) => autor.id === id)

    if (index>-1) {
      autores[index].nacionalidad=nacionalidad
      utils.saveJson(autores,this.file)
        console.log(chalk.green.inverse('Autor updated!'))
    }else {
        console.log(chalk.red.inverse('Autor not found!'))
    }
  }
  
  removeAutor(nombres,apellidos){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , 997)
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

    autores.forEach((autor) => {
        console.log(autor)
    })
  }

  readAutor(nombres, apellidos){
    const autores = utils.loadJson(this.file)
    const id=crc32.buf(
      nombres//.toString()
      + apellidos//.toString()
      , 997)
    
    const autor = autores.find((autor) => autor.id === id)

    if (autor) {
        //console.log(chalk.inverse(autor))
        console.log(autor)
    } else {
        console.log(chalk.red.inverse('Autor not found!'))
    }
  }
}

module.exports = {Autor}