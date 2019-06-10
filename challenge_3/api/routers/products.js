const express = require('express'),
    path = require('path'),
    createError = require('http-errors'),
    db = require(path.join('..','..','db.json')),
    router = express.Router(),
    pattern = /^[1-9]+[\d]*$/

router.route('/')
    .get((req,res)=>{
        if(!Object.keys(req.query).length) return res.json(db)
        let query =req.query
        if( !('search' in query) &&
            !('limit' in query) && 
            !('page' in query)) return res.json('nel')
        let result = []
        if('search' in query) result=db.filter(user=>user.first_name.startsWith(query.search)===true)
        if('limit' in query) result = result.splice(+query.page-1 || 0,query.limit)
        console.log(result.length)
        res.json(result)
    })
    .post((req,res)=>{

    })
router.get('/:id',(req,res,next)=>{
    let id = req.params.id
    if(pattern.test(id)) return res.json(db.find((user)=>+id===user.id))
    return res.json('nel')
})

module.exports = router

