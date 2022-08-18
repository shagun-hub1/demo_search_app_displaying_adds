const catchAsyncError = require("../middleware/catchAsyncError");
const Add=require('../models/ads')
const ErrorHandler=require('../utils/errorHandler')

exports.createNewAdd=catchAsyncError(async(req,res,next)=>{

    
    const newAdd=await Add.create(req.body)

    res.status(201).json({
        success:true,
        newAdd
    })

})

exports.getAddByKeyword=catchAsyncError(async(req,res,next)=>{

    const adds=await Add.find({keywords:{$all:[req.params.keyword]}})
     

    res.status(200).json(adds)

})

exports.updateAdd=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;

    const add=await Add.findById(id)

    if(!add)
    return next(new ErrorHandler(404,"Add not found"))

    const updatedAdd=await Add.findByIdAndUpdate(id,req.body,{new:true})

    res.status(200).json(updatedAdd)

})