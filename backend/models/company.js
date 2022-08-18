const mongoose=require('mongoose')

const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('company',companySchema)