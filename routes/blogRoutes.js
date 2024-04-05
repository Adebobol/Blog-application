const express = require('express')
const router = express.Router()
const { getAllBlogs } = require('./../controllers/blogController')





router.route('/').get(getAllBlogs)


module.exports = router