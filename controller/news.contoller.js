async function getAllNews(req, res) {

    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

async function getByCategory(req, res) {

    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = {

    getAllNews,
    getByCategory
}