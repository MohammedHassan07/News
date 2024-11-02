const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        const imagePath = path.join(__dirname, '../public/images')
        cb(null, imagePath)
    },
    filename: (req, file, cb) => {

        const fileName = Math.random()

        // TODO: Needs to change the extension of the file
        return cb(null, file.originalname + '-' + fileName + '.png')
    }
})


const upload = multer({ storage })

module.exports = upload
