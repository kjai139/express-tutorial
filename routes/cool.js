const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send("You're so cool")
})


module.exports = router