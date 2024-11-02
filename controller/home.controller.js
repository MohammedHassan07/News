const prisma = require('../config/prismaClient')
async function home(req, res) {

    try {

        const news = await prisma.post.findMany()

        if (!news) return res.status(404).json({ message: 'No post found' })

        // console.log(news)
        res.render('home', {news})

    } catch (error) {


    }
}

function contact(req, res) {

    res.render('contact')
}

module.exports = {
    home,
    contact
}