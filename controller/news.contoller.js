const prisma = require("../config/prismaClient")

// function to get all news
async function getAllNews(req, res) {

    try {

        const news = await prisma.post.findMany()

        if (!news) return res.status(404).json({ message: 'No post found' })

        res.status(200).json({ news })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

// function to get news by category
async function getByCategory(req, res) {

    try {

        const category = req.params.category

        const news = await prisma.post.findMany({
            where: {
                category
            }
        })

        if (!news) return res.status(404).json({ message: 'No post found' })

        res.status(200).json({ news })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

// function to get news by id
async function getById(req, res) {
    try {

        const newsId = Number(req.params.id)

        const news = await prisma.post.findUnique({
            where: {
                id: newsId
            }
        })

        if (!news) return res.status(404).json({ message: 'No post found' })

        // console.log(news)

        res.status(200).render('news', { news })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = {

    getAllNews,
    getByCategory,
    getById
}