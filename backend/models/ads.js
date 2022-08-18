const mongoose=require('mongoose')

const addSchema=new mongoose.Schema({
    companyId:{
        type:String,
        required:true
    },
    primaryText:{
        type:String,
        required:true
    },
    headline:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    CTA:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    keywords:{
         type:[String],
         required:true
    }
})

module.exports=mongoose.model('adds',addSchema)