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

## **Métodos**

- `req.all` : Este método no se deriva de ningún método HTTP. Este método se utiliza para cargar funciones de middleware en una via de acceso para todos los métodos de solicitud

En el siguiente ejemplo, el handler se ejecutará para las solicitudes a “/secret”, tanto si utiliza GET, POST, PUT, DELETE, como cualquier otro método de solicitud HTTP soportado en el módulo http.

````javascript
    app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
    });

````

[Referencias](https://expressjs.com/es/api.html)<br>
[Referencias](https://expressjs.com/es/guide/routing.html)
