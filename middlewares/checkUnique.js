const prisma = require("../config/prismaClient")

module.exports = async function checkUniqueuser(req, res, next) {

    try {

        const { email } = req.body

        const user = await prisma.user.findUnique({

            where: {
                email: email
            }
        })

        if (user)
            return res.status(400).json({ message: 'User is already present with provided email' })
        
        next()

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong !!!' })
    }
}
