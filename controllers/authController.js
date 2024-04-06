const User = require('./../Model/userModel')
const jwt = require('jsonwebtoken')


const signToken = id => { return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }) }

exports.signUp = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })

    const signUpToken = signToken(newUser._id)

    res.status(201).json({
        status: 'success',
        token: signUpToken,
        data: {
            user: newUser
        }
    })
}


exports.login = async (req, res) => {
    const { email, password } = req.body

    // checking if name & password is provided.
    if (!email || !password) {
        return
    }

    // confirm if password is same as the signUp password
    const user = await User.findOne({ email }).select('+password')

    // CHECKING IF THE A USER EXISTS WITH THE EMAIL PROVIDED AND THE PASSWORD IS CORRECT
    if (!user || !(await user.correctPassword(password, user.password))) {
        return
    }
    // THERE IS A USER AND PASSWORD IS CORRECT
    const loginToken = signToken(user._id)
    res.status(200).json({
        status: "success",
        loginToken
    })

}





