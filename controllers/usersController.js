/* 1- IMPOTING
import only DB 
___________________________________________________ */
const db = require('../model/db')

/* 2- Named-Exporting + declaring Router's Controllers functions 
___________________________________________________ */
//  getting all records from db.json
exports.getAllUsers = (req,res,next)=>{
    let users = db.get('users').value()
    res.json({users})
}

// getting single user from db.json
exports.getSingleUser = (req,res,next)=>{
    const {id}=req.params
    let singleUser = db.get('users').find({id}).value()
    res.send({singleUser})
}

// post req to add new single user to the db.json
exports.postNewUser = (req,res,next)=>{
    db.get('users').push(req.body).write()
    res.send('new user has been added')
}

// put req to update single user in db.json
exports.updateUserData = (req,res,next)=>{
    const {id}=req.params
    db.get('users').find({id:id}).assign(req.body).write()
    res.send("user's data have been updated")
}

// delete req to delete user's data from db.json
exports.deleteUserData = (req,res,next)=>{
    const {id}=req.params
    let user= db.get('users').find({id}).write()

    if(user){ 
    res.send("user's data have been deleted")
    }else{
        let error = new Error('no such user found in database')
        error.status = 404
        next(error)
    }
}
