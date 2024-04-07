const express = require('express')
const router = express.Router()
const { getAllUsers, createUser } = require('./../controllers/userController')
const authController = require('./../controllers/authController')





router.post('/signUp', authController.signUp)
router.post('/login', authController.login)

router.route('/').get(getAllUsers).post(createUser)

module.exports = router