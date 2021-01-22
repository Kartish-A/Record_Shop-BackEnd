/* 1- IMPOTING
import EXPRESS and DB and all the CONTROLLERS
___________________________________________________ */
const express =require('express')

const {getAllUsers, getSingleUser, postNewUser, updateUserData, deleteUserData} = require('../controllers/usersController')

const db = require('../model/db')

/* 2- init : creating express ROUTER 
___________________________________________________ */
const router = express.Router()


/* 3- creating Router's Methods  
___________________________________________________ */
// get all the users from database
router.get('/',getAllUsers)

// get a single user from database
router.get('/:id',getSingleUser)

// post request to add new user to database
router.post('/',postNewUser)

//put request to update single user in database
router.put('/:id',updateUserData)

// delete request to delete single user in database
router.delete('/:id',deleteUserData)


/* 4- Exporting Default Router  
___________________________________________________ */
module.exports = router 