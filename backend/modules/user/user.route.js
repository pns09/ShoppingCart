const express = require('express')
const router = express.Router()
const usercontroller = require('./controllers/user.controller')

router.get('/all', usercontroller.getallusers)

router.get('/getone/:id', usercontroller.getonebyid)

router.post('/create', usercontroller.createuser)

router.post('/delete/:id', usercontroller.deleteuser)

router.post('/edit/:id', usercontroller.updateuser)

module.exports = router