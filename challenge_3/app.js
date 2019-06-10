const express = require('express'),
    morgan = require('morgan'),
    products = require('./api/index'),
    app = express(),
    PORT = process.env.PORT || 8000

app.use(morgan('dev'))
    .use(express.json())
    .use(express.urlencoded({extended:false}))
    .use('/api/v1/products/',products)
    .listen(PORT,()=>console.log(`Escuchando en el puerto ${PORT}`))

// https://www.restapitutorial.com/httpstatuscodes.html