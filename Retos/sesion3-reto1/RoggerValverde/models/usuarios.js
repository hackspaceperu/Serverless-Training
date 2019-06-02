const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')

class Usuario {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(crcNum,file) {
    this.crcNum = crcNum
    this.file = file
  }

  addUsuario(nombres, apellidos, correo){
    const usuarios = utils.loadJson(this.file)
    const id=crc32.buf(
      correo
      , this.crcNum)
    const duplicateUsuario = usuarios.find((usuario) => usuario.id === id)

    if (!duplicateUsuario) {
      const usuario={
        id,
        nombres,
        apellidos,
        correo
      }
      usuarios.push(usuario)
      utils.saveJson(usuarios,this.file)
      console.log(chalk.green.inverse('New usuario added!'))
      return usuario
    }else {
      console.log(chalk.red.inverse('Usuario already in!'))
      return
    }
  }

  updateUsuario(nombres, apellidos, correo){
    const usuarios = utils.loadJson(this.file)
    const id=crc32.buf(
      correo
      , this.crcNum)
    const index = usuarios.findIndex((usuario) => usuario.id === id)

    if (index>-1) {
      usuarios[index].nombres=nombres
      usuarios[index].apellidos=apellidos
      utils.saveJson(usuarios,this.file)
      console.log(chalk.green.inverse('Usuario updated!'))
      return usuarios[index]
    }else {
      console.log(chalk.red.inverse('Usuario not found!'))
      return
    }
  }
  
  removeUsuario(correo){
    const usuarios = utils.loadJson(this.file)
    const id=crc32.buf(
      correo
      , this.crcNum)
    const usuariosToKeep = usuarios.filter((usuario) => usuario.id !== id)

    if (usuarios.length > usuariosToKeep.length) {
        console.log(chalk.green.inverse('Usuario removed!'))
        utils.saveJson(usuariosToKeep,this.file)
    } else {
        console.log(chalk.red.inverse('No usuario found!'))
    }    
  }

  listUsuarios(){
    const usuarios = utils.loadJson(this.file)
    
    console.log(chalk.inverse('Tus usuarios'))

    return usuarios
    /*usuarios.forEach((usuario) => {
        console.log(usuario)
    })*/
  }

  readUsuario(correo){
    const usuarios = utils.loadJson(this.file)
    const id=crc32.buf(
      correo
      , this.crcNum)
    
    const usuario = usuarios.find((usuario) => usuario.id === id)

    if (usuario) {
      return usuario
    } else {
      console.log(chalk.red.inverse('Usuario not found!'))
      return
    }
  }

  getUsuarioByID(id){
    const usuarios = utils.loadJson(this.file)
    const usuario = usuarios.find((usuario) => usuario.id === id)
    if (usuario) {
        //console.log(chalk.inverse(album))
        return usuario
        //console.log(album)
    } else {
        console.log(chalk.red.inverse('Usuario not found!'))
        return
    }
  }
}

module.exports = {Usuario}