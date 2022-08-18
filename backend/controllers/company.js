const Company=require('../models/company')
const catchAsyncError = require("../middleware/catchAsyncError");

exports.createNewCompany=catchAsyncError(async(req,res,next)=>{

  
   
    const newCompany=await Company.create(req.body)

    res.status(201).json({
        success:true,
        newCompany
    })
})