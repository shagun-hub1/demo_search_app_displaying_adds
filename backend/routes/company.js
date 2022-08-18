 
const { createNewCompany } = require('../controllers/company')

const router=require('express').Router()

router.post('/company/new',createNewCompany)
 

module.exports=router