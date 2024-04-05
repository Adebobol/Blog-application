const express = require('express')
const mongoose = require("mongoose")
const userRouter = require('./routes/userRoutes')
const blogRouter = require("./routes/blogRoutes")


mongoose.connect("mongodb://127.0.0.1/Blog-application", {}).then(() => console.log("DB running"))



const app = express()
app.use(express.json())


app.use('/api/users', userRouter)
app.use('/api/blog', blogRouter)
app.listen(5000, () => {
    console.log('Running')
})