const express = require('express')
const mongoose = require("mongoose")
const userRouter = require('./routes/userRoutes')


mongoose.connect("mongodb://127.0.0.1/Blog-application", {}).then(() => console.log("DB running"))



const app = express()
app.use(express.json())


app.use('/api/users', userRouter)
app.listen(5000, () => {
    console.log('Running')
})