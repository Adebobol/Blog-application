const express = require('express')
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Blog-application", {}).then(() => console.log("DB running"))



const app = express()
app.use(express.json())
app.listen(5000, () => {
    console.log('Running')
})