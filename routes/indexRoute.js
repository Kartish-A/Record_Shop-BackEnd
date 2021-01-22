const express = require('express')
const router = express.Router()

// the function within the router called controller
const {index} = require('../controllers/indexController')

router.get('/',index)

// Default export
module.exports=router