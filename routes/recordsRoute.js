/* 1- IMPOTING
import EXPRESS and DB and all the CONTROLLERS
___________________________________________________ */
const express = require('express')

const {getAllRecords,postAddNewRecord,putUpdateRecord,deleteSingleRecord,getSingleRecord}= require('../controllers/recordsController')

const db = require('../model/db')

/* 2- init : creating express ROUTER 
___________________________________________________ */
const router /* or any other name */= express.Router()


/* 3- creating Router's Methods  
___________________________________________________ */
// get all records from  resources
router.get('/', getAllRecords )

// post request to add new record
router.post('/',postAddNewRecord)

//put request to update single record in database
router.put('/:id', putUpdateRecord)

//delete request to delete single record in database
router.delete('/:id', deleteSingleRecord)

// get single record from database
router.get('/:id',getSingleRecord)


/* 4- Exporting Default Router  
___________________________________________________ */
module.exports =router