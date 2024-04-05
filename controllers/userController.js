const User = require('./../model/userModel')

exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })
}

exports.createUser = async (req, res, next) => {
    const newUser = await User.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            users: newUser
        }
    })
}

// exports.getUser = () => {
//     let currentUser
// }