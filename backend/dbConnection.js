const mongoose=require('mongoose')
require('dotenv').config({})

const url=process.env.DB_URL
const connection=mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(data=>{
    console.log(`Connection with server ${data.connection.host}`)
})
.catch(err=>{
    console.log(err)
})

module.exports=connection