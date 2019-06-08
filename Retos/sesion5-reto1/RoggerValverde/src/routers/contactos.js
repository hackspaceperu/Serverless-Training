const express = require('express')
//const {loadJson,saveJson}=require("../utils/utils")
let contactos=require("../db/contactos.json")
const crc32 = require('crc-32')
const router = new express.Router()

router.post('/', async (req, res) => {
    try {
        const contacto = {
          ...req.body,
          id: (crc32.buf(new Date()+"", 17)/2+1073741824)
        }
        contactos.push(contacto)
        res.status(201).send(contacto)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.put('/:id', async (req, res) => {
    const index = contactos.findIndex((contacto) => contacto.id === +req.params.id)

    if (index>-1) {
      contactos[index].nombre=req.body.nombre
      contactos[index].telefono=req.body.telefono
      res.status(201).send(contactos[index])
    }else {
      res.status(400).send("No se encontro al contacto")
    }
  }
)

router.get('/', async (req, res) => {
  let contacts=[...contactos]
  let skip
  if (req.query.search) {
    contacts = contacts.filter(contacto => contacto.nombre.includes(req.query.search));
  }
  if (req.query.limit) {
    skip=req.query.skip?+req.query.skip:0
    console.log(contacts,skip,skip+Number(req.query.limit)+1)
    contacts=contacts.splice(skip,(skip+Number(req.query.limit))||contacts.length)
  }
  res.render('contacts', {
    title: 'Contactos',
    name: 'Rogger Valverde',
    contactos: contacts
  }
  )
})

router.get('/:id',  async (req, res) => {
  res.render('contacts', {
    title: 'Sobre el autor',
    name: 'Rogger Valverde',
    contactos: [contactos.find((contacto)=>{return contacto.id===+req.params.id})]
  })
})

router.patch('/:id',  async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nombre', 'telefono']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Actualizacion inválida!' })
    }

    try {
      const index = contactos.findIndex((contacto) => contacto.id === +req.params.id)

    if (index>-1) {
      updates.forEach((update) => contactos[index][update] = req.body[update])
      res.send(contactos[index])
    }else {
      res.status(404).send("No se encontro al contacto")
    }

    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/:id',  async (req, res) => {
  try {
    const contactosToKeep = contactos.filter((contacto) => contacto.id !== +req.params.id)
    if (contactos.length > contactosToKeep.length) {
      contactos=[...contactosToKeep]
      res.send({})
    } else {
      res.status(404).send("No se encontro el contacto")
    } 
    console.log(contactos)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router