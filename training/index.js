// que es express es una infraestructura web de direccionamiento y middleware que tiene una funcionalidad minima propia
const express = require('express'),
    user = require('./api'),
    app = express()

// Un middleware tambien conocida como lógica de intercambio entre aplicaciones , es un software que asiste a una aplicacion para interactuar o comunicar con otras aplicaciones

app.set('port',process.env.PORT || 8000)
app.use(express.json()) // lo que hace este middleware es parsear los request llegados desde usuario y convertirlos en JSON
app.use(express.urlencoded({ extended: true }))
app.use('/users',user)

app.listen(app.get('port'),()=>console.log(`Escuchando en el  puerto ${app.get('port')}`))