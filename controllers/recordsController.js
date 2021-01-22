/* 1- IMPOTING
import only DB 
___________________________________________________ */
const db =require('../model/db')

/* 2- Named-Exporting + declaring Router's Controllers functions 
___________________________________________________ */
//getting all records from db.json
exports.getAllRecords= (req,res,next)=>{
    let records = db.get('records').value()
    /* res.send('sending all records from out database') or: */
    res.json({records})
}
// get single record from database
exports.getSingleRecord = (req,res,next)=>{
    const {id}=req.params
    let singleRecord = db.get('records').find({id}).value()
    res.send({singleRecord})
    /* res.status(200).json({success:true,record:singleRecord}) */
    /* res.status(404).json({success:false,message:"we couldn't find record with that specified ID"}) */
}

 // post request to add Record into db.json
exports.postAddNewRecord = (req,res,next)=>{
    console.log(req.body);
    db.get('records').push(req.body).write()
    res.send('new single record added into database')
}

//put request to update single record in database
exports.putUpdateRecord = (req,res,next)=>{
    const {id}=req.params
    db.get('records').find({id:id}).assign(req.body).write()
    res.send('single record was updated')
}

//delete request to delete single record in database
exports.deleteSingleRecord = (req,res,next)=>{
    const {id}=req.params
    //selector/pointer //finding that record // deleting record // store changes
    let record= db.get('records').find({id}).write()
    if(record){
        db.get(records).remove({id}).write()
        res.send('record deleted')
    }else{
        let error = new Error('no such record found in database')
        error.status = 404
        /* res.status(error.status).send({success:false, message:error.message}) */
        next(error)
    }
}



//CRUD Operation
// RESTful API representational state transfer
