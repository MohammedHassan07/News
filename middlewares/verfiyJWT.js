const jwt = require('jsonwebtoken')

const verifyJWT = async (req, res, next) => {

    try {

        const userToken = req.cookies.token

        // const userToken = req.cookies.token.token
        // console.log(req)

        if (!userToken) {

            res.status(401).json({
                error: "Unauthorized",
                message: "Authorization token is missing or invalid. Please provide a valid JWT token."
            })
            return
        }

        const verifiedToken = jwt.verify(userToken, process.env.ACCESS_TOKEN)

        if (!verifiedToken) {

            res.status(401).json({
                error: "Unauthorized",
                message: "Authorization token is missing or invalid. Please provide a valid JWT token."
            })
        }

        // console.log('verify jwt --> ', verifiedToken)
        // req.userId = verifiedToken

        // TODO: sql query
        // const user = await userModel.findOne({ mobile: verifiedToken }).select('-password')
        // req.user = user
        next()
    } catch (error) {

        console.log(error)
        res.status(500).json({ message: error })
    }
}

module.exports = verifyJWT