const { createNewAdd, getAddByKeyword, updateAdd } = require('../controllers/ads')

const router=require('express').Router()

router.post('/adds/new',createNewAdd)
router.get('/adds/:keyword',getAddByKeyword)
router.put('/adds/:id',updateAdd)

module.exports=router