const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getimg = (req, res) => {
    res.render('sample.ejs')
}

const getABC = (req, res) => {
    res.send('Show alphabet document')
}
module.exports = {
    getHomepage, getABC, getimg
}