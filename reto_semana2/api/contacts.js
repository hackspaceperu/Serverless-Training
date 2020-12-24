const express = require('express');
const router = express.Router();
let db = require('../db_contacts.json');

router.route('/contacts')
    .all( (req, res, next)=>{
        console.log('all mw');
        next();
    })
    .get((req, res)=>{
        let viewDb = JSON.parse( JSON.stringify(db) );
        let queryParams = req.query;
        if( 'search' in queryParams ){
            viewDb = viewDb.filter((contact)=>{
                return contact.first_name.toLowerCase().includes(queryParams.search.toLowerCase()) || 
                contact.last_name.toLowerCase().includes(queryParams.search.toLowerCase());
            });
        }
        if( 'limit' in queryParams && 'page' in queryParams){
            let limit = parseInt(queryParams.limit), page = parseInt(queryParams.page);
            if( !isNaN( limit ) && !isNaN( page ) ){
                const indexStart = limit * (page - 1);
                viewDb = viewDb.splice(indexStart, limit);
            }
        }
        res.json(viewDb);
    })
    .post((req, res)=>{
        let newContact = req.body;
        let foundedContact = db.find((contact) => contact.id === newContact.id );
        if( foundedContact ){
            res.status(500);
            res.send(`id ${newContact.id} ya utilizado `);
        }else{
            db.push(newContact);
            res.sendStatus(201);
        }
    })
    .put((req, res)=>{
        let replaceContact = req.body;
        let foundedContact = db.find((contact) => contact.id === replaceContact.id );
        if( !foundedContact ){
            res.status(500);
            res.send(`id ${replaceContact.id} no existe para reemplazar contacto`);
        }else{
            db = db.map( contact => {
                if(contact.id === replaceContact.id) return replaceContact;
                else return contact;
            });
            res.sendStatus(200);
        }
    })
    .patch((req, res)=>{
        let replaceContact = req.body;
        let foundedContact = db.find((contact) => contact.id === replaceContact.id );
        if( !foundedContact ){
            res.status(500);
            res.send(`id ${replaceContact.id} no existe para reemplazar atributos`);
        }else{
            db = db.map( contact => {
                if(contact.id === replaceContact.id){
                    for(let key in replaceContact){
                        contact[key] = replaceContact[key];
                    }
                    return contact;
                }else return contact;
            });
            res.sendStatus(200);
        }
    });

router.get('/contacts/:id', (req, res)=>{
    res.json(db.find((user)=> +req.params.id === user.id ));
});

router.delete('/contacts/:id', (req, res)=>{
    const deleteId = parseInt(req.params.id);
    if( isNaN(deleteId) ){
        res.status(500);
        res.send('el id debe ser integer');
    }else{
        let foundedContact = db.find((contact) => contact.id === deleteId );
        if( !foundedContact ){
            res.status(404);
            res.send(`id ${deleteId} no existe para eliminar`);
        }else{
            db = db.filter( contact => {
                return contact.id !== deleteId;
            });
            res.sendStatus(200);
        }
    }
});

module.exports = router;