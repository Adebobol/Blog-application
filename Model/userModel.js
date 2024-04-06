const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'A user need a password'],
        unique: true,
        select: false
    }
})

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.correctPassword = async function (inputPassword, correctPassword) {
    return await bcrypt.compare(inputPassword, correctPassword)
}


const User = mongoose.model('User', userSchema)

module.exports = User