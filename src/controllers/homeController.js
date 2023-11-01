const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getBieudo = (req, res) => {
    res.render('Bieu_do.ejs')
}

const getsign_in = (req, res) => {
    res.render('sign_in.ejs')
}

const getsign_up = (req, res) => {
    res.render('sign_up.ejs')
}

const gettable = (req, res) => {
    res.render('table.ejs')
}

const getvideo = (req, res) => {
    res.render('video.ejs')
}

const postCreateUser = (req, res) => {
    //console.log("request.body:", req.body)
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    let full_name = req.body.full_name

    //console.log("username", username, password, email, full_name)
    // INSERT INTO accounts (username, password, full_name, email)
    //     VALUES ('username', 'password', 'full_name', 'email');
    connection.query(
        `INSERT INTO accounts (username, password, full_name, email)
          VALUES (?, ?, ?, ?)
      `,
        [username, password, full_name, email],
        function (err, results) {
            console.log(results);
            res.send(' <h1>CREATE USER SUCCESS!!</h1>')
        });
}

module.exports = {
    getHomepage, getsign_in, getBieudo, gettable, getvideo, getsign_up, postCreateUser
}