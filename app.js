const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const userRouter = require('./routes/userRoutes')
const blogRouter = require("./routes/blogRoutes")
dotenv.config({ path: './config.env' });

mongoose.connect("mongodb://127.0.0.1/Blog-application", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB running"))



const app = express()
app.use(express.json())
const port = process.env.PORT || 5000

app.use('/api/users', userRouter)
app.use('/api/blog', blogRouter)
app.use('/api', (req, res, next) => {
    res.send("Media Application")
    next()
})

// app.use((err, req, res, next) => {
//     res.status(err.statusCode).json({
//         status: err.statusCode,
//         error: err,
//         message: err.message,
//         stack: err.stack
//     })
//     next()
// })

app.listen(port, () => {
    console.log(`Running on Port ${port}`)
})

app.use((err, req, res, next) => {
    res.status(err.statusCode).json({
        status: err.statusCode,
        error: err,
        message: err.message,
        stack: err.stack
    })
})
