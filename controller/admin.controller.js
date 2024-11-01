const bcrypt = require('bcryptjs')
const prisma = require('../config/prismaClient')
const jwt = require('jsonwebtoken')

// function to registe admin
async function register(req, res) {

    try {

        const { name, email, password } = req.body

        const hashSalt = Number(process.env.HASH_SALT)
        const hashPassword = await bcrypt.hash(password, hashSalt)

        console.log(hashPassword)

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


// function to login admin
async function login(req, res) {

    try {

        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) return res.status(404).json({ message: 'Invalid credentials' })

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) return res.status(404).json({ message: 'Invalid credentials' })

        const ACCESS_TOKEN = process.env.ACCESS_TOKEN
        const token = jwt.sign(email, ACCESS_TOKEN)

        if (!token) return res.status(500).json({ message: 'Something went wrong' })

            res.cookie('token', token, {

                httpOnly: true
            })
        return res.status(200).json({ message: 'Login Successfull'} )

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
    login,
    addPost
}