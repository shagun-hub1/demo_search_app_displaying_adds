
 const express=require('express')
 
const error=require('./middleware/error')
 
const cors=require('cors')

const app=express()

 
app.use(cors())
app.use(express.json( ))

 

//routes
const addsRoute=require('./routes/add')
const companyRoute=require('./routes/company')
app.use('/api/v1',addsRoute)
app.use('/api/v1',companyRoute)

app.use(error)
module.exports=app