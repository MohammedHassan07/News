async function addPost(req, res) {

    try {

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = {

    addPost
}