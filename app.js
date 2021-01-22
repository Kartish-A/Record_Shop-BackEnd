/* 1- Importing  
import EXPRESS and all EXTERNAL MODULES and all the ROUTERES 
___________________________________________________*/
const express = require('express')
const morgan = require('morgan')
const indexRoute = require('./routes/indexRoute')
const recordsRoute = require('./routes/recordsRoute')
const usersRoute = require('./routes/usersRoute')


/* 2- init : creating express server 
___________________________________________________ */
const app = express()

/* 3- use middlewares (external or internal)
__________________________________________________ */
app.use(morgan('dev'))
app.use(express.json())

/* 4- setting Routers up
__________________________________________________ */
app.use('/',indexRoute)
app.use('/api/records',recordsRoute)
app.use('/api/users',usersRoute)

/* 5- ERORR handling
__________________________________________________ */
app.use((req,res,next)=>{
    let error = new Error('No such route found')
    console.log(error.message)
    // error.status=404
    /* res.status(error.status).send({errorMessage: error.message}) */
    next(error)
})

/* 6- UNIVERSAL Error handler
__________________________________________________ */
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    .send({success:false, message:err.message})
})

/* 7- listning Port
__________________________________________________ */
app.listen(3000,()=> console.log('server is runing'))


/* MVC module views controller (pattern) */