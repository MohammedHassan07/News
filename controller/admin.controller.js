const bcrypt = require('bcryptjs')
const prisma = require('../config/prismaClient')

async function register(req, res) {

    try {

        const { name, email, password } = req.body

        const hashSalt = Number(process.env.HASH_SALT)
        const hashPassword = bcrypt.hash(password, hashSalt)

        const data = { name, email, password: hashPassword }

        const newUser = await prisma.user.create({
            data
        })

        if (newUser) return res.status(201).json({ message: 'User Created Successfully' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}


async function addPost(req, res) {

    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = {

    register,
    addPost
}