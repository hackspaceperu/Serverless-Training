const express = require('express'),
    router = express.Router(),
    db = require('../db.json')

router.get('/',(req,res)=>{
    
    let query = req.query
    if(!Object.keys(query).length) return res.json(db)
    let id = +req.query.id
    // console.log(id);
    res.json(db[id-1])
    // res.send(req.body)
})
//params
// localhost:port/user/1
// localhost:port/user/1/products
// localhost:port/user/1/products/54
router.get('/:id',(req,res)=>{
    // console.log(req.params.id);
    res.json(db[+req.params.id-1])
})
router.post('/',(req,res)=>{
    res.send(req.body)
})

module.exports = router

//params
//body
//query