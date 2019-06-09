const express = require('express'),
    router = express.Router()

router.get('/',(req,res)=>{
    res.json(require('../db.json'))
})
router.post('/',(req,res)=>{
    res.send(req.body)
})

module.exports = router