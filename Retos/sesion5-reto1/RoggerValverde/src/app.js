const path = require('path')
const express = require('express')
const hbs = require('hbs')
const contactos=require("./routers/contactos")

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.json())

app.use(express.static(publicDirectoryPath))

app.get('/api/v1', (req, res) => {
    res.render('index', {
        title: 'Agenda',
        name: 'Rogger Valverde'
    })
})

app.get('/api/v1/about', (req, res) => {
    res.render('about', {
        title: 'Sobre el autor',
        name: 'Rogger Valverde'
    })
})

app.get('/api/v1/help', (req, res) => {
    res.render('help', {
        helpText: 'Texto de ayuda.',
        title: 'Ayuda',
        name: 'Rogger Valverde'
    })
})

app.use("/api/v1/contacts",contactos);

app.get('*', (req, res) => {
  res.render('404', {
      title: '404',
      name: 'Rogger Valverde',
      errorMessage: 'Página no encontrada.'
  })
})

app.listen(port, () => {
    console.log('Server está usando el puerto ' + port)
})