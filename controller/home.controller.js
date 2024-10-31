function home(req, res) {

    res.render('home')
}

function contact(req, res) {

    res.render('contact')
}

module.exports = {
    home,
    contact
}