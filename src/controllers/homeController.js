const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getimg = (req, res) => {
    res.render('sample.ejs')
}

const sign_in = (req, res) => {
    res.render('sign_in.ejs')
}
module.exports = {
    getHomepage, sign_in, getimg
}