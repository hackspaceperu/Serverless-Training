# **Request**

El objeto request reperesenta la solicitud HTTP y tiene propiedades para
la cadena de consulta de la petición, que son los parametros el cuerpo y }
las cabeceras de HTTP

```javascript
    app.get('/users/:id',(req,res)=>{
        res.send(`ùser ${req.params.id}`)
    })
```

## **Propiedades**

- `req.app` : Esta propiedad contiene la referencia a la instancia de la<br> propiedad de express que utiliza el middleware

```javascript
    app.get('/views',function (req, res) {
        res.send('The views directory is ' + req.app.get('views'))
    })
    // output : The views directory is D:\Serverless-Training\training\views
```

[Referencias](https://expressjs.com/es/api.html)
