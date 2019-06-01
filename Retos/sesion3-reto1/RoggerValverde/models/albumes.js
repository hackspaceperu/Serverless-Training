const utils = require('../utils/utils')
const crc32 = require('crc-32')
const chalk = require('chalk')
// const models = require('./index')

class Album {
	// constructor(nombres, apellidos, nacionalidad) {
	// 		this.nombres = nombres;
	// 		this.apellidos = apellidos;
	// 		this.nacionalidad = nacionalidad;
  // }
  constructor(crcNum,file,autorModel) {
    this.crcNum = crcNum
    this.file = file
    this.autorModel = autorModel
  }

  addAlbum(nombre, nombresAutor, apellidosAutor,fechaLanzamiento){
    const albumes = utils.loadJson(this.file)
    const autor=this.autorModel.readAutor(nombresAutor,apellidosAutor)
    if(autor){
      //console.log(autor)
      const id=crc32.buf(
        nombre//.toString()
        + autor.id.toString()
        , this.crcNum)

      const duplicateAlbum = albumes.find((album) => album.id === id)
      
      if (!duplicateAlbum) {
        const album={
          id,
          nombre,
          autor:autor.id,
          fechaLanzamiento
        }
        albumes.push(album)
        utils.saveJson(albumes,this.file)
        console.log(chalk.green.inverse('New album added!'))
        return album
      }else {
        console.log(chalk.red.inverse('Album already in!'))
        return 
      }
    }else{
      return
      //console.log(chalk.red.inverse('Autor not found!'))
    }    
  }

  updateAlbum(nombre, nombresAutor, apellidosAutor,fechaLanzamiento){
    const albumes = utils.loadJson(this.file)
    const autor=this.autorModel.readAutor(nombresAutor,apellidosAutor)
    if(autor){
      //console.log(autor)
      const id=crc32.buf(
        nombre//.toString()
        + autor.id.toString()
        , this.crcNum)
        
      const index = albumes.findIndex((album) => album.id === id)
      if (index>-1) {
        albumes[index].fechaLanzamiento=fechaLanzamiento
        utils.saveJson(albumes,this.file)
        console.log(chalk.green.inverse('Album updated!'))
        return albumes[index]
      }else {
        console.log(chalk.red.inverse('Album not found!'))
        return
      }
    }
    return
  }
  
  removeAlbum(nombre, nombresAutor, apellidosAutor){
    const albumes = utils.loadJson(this.file)
    const autor=crc32.buf(
      nombresAutor//.toString()
      + apellidosAutor//.toString()
      , this.crcNum)
    const id=crc32.buf(
      nombre//.toString()
      + autor.toString()
      , this.crcNum)
    const albumesToKeep = albumes.filter((album) => album.id !== id)

    if (albumes.length > albumesToKeep.length) {
        console.log(chalk.green.inverse('Album removed!'))
        utils.saveJson(albumesToKeep,this.file)
    } else {
        console.log(chalk.red.inverse('No album found!'))
    }    
  }

  listAlbumes(){
    const albumes = utils.loadJson(this.file)
    
    console.log(chalk.inverse('Your albumes'))

    return albumes
    /*albumes.forEach((album) => {
        console.log(album)
    })*/
  }

  readAlbum(nombre, nombresAutor, apellidosAutor){
    const albumes = utils.loadJson(this.file)
    const autor=crc32.buf(
      nombresAutor//.toString()
      + apellidosAutor//.toString()
      , this.crcNum)
    const id=crc32.buf(
      nombre//.toString()
      + autor.toString()
      , this.crcNum)
    
    const album = albumes.find((album) => album.id === id)

    if (album) {
        //console.log(chalk.inverse(album))
        return album
        //console.log(album)
    } else {
        console.log(chalk.red.inverse('Album not found!'))
        return
    }
  }

  getAlbumByID(id){
    const albumes = utils.loadJson(this.file)
    const album = albumes.find((album) => album.id === id)
    if (album) {
        //console.log(chalk.inverse(album))
        return album
        //console.log(album)
    } else {
        console.log(chalk.red.inverse('Album not found!'))
        return
    }
  }
}

module.exports = {Album}