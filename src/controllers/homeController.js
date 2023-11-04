const { request } = require('express')
const connection = require('../config/database')
const { getAllaccounts, getUpdateaccount } = require('../services/CRUDservices')

const getHomepage = async (req, res) => {
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

const gettable = async (req, res) => {
    let results = await getAllaccounts()
    return res.render('table.ejs', { listaccounts: results })
}


const getvideo = (req, res) => {
    res.render('video.ejs')
}

const postCreateUser = async (req, res) => {
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
            res.send(` <!DOCTYPE html>
            <html>
            <head>
                <script>
                    function openPopup() {
                        alert('FBI warning! Your IP address has been saved in the system for investigation');
                        window.location.href = '/home'
                    }
                </script>
            </head>
            <body>
            <h1>Account successfully created
        </h1>
            <button type="button" onclick="openPopup()">Click Me!</button>
            
            </body>
            </html> `)
        });

}

const getUpdateUser = async (req, res) => {
    const account_id = req.params.id;
    let user = await getUpdateaccount(account_id);
    user = Array.isArray(user) ? user[0] : user
    res.render('edit_user.ejs', { useredit: user })
}
const postUpdateUser = async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    let full_name = req.body.full_name
    let userID = req.body.userID
    console.log('email:', email, 'userID:', userID)
    connection.query(
        `UPDATE accounts 
        SET username = ?, password = ?, full_name=?, email=?
        WHERE account_id= ?
      `,
        [username, password, full_name, email, userID],
        function (err, results) {
            console.log(results);
            res.redirect('/table')
            //     res.send(` <!DOCTYPE html>
            //     <html>
            //     <head>
            //         <script>
            //             function openPopup() {
            //                 alert('Update succesfully');
            //                 window.location.href = '/table'
            //             }
            //         </script>
            //     </head>
            //     <body>
            //     <h1>Account successfully update
            // </h1>
            //     <button type="button" onclick="openPopup()">Click Me!</button>

            //     </body>
            //     </html> `)
        });
}
const postDeleteUser = async (req, res) => {
    const userID = req.params.id;
    let user = await getUpdateaccount(userID);
    user = Array.isArray(user) ? user[0] : user
    res.render('delete_user.ejs', { useredit: user })
    console.log('delete user', user)
    // res.render('delete_user.ejs')
}

// const postHandleRemoveUser = async (req, res) => {
//     try {
//         let userID = req.body.userID;
//         await connection.query('DELETE FROM accounts WHERE account_id = ?', [userID]);
//     } catch (err) {
//     }
//     res.redirect('/table')
// }
const postHandleRemoveUser = async (req, res) => {
    try {
        let userID = req.body.userID;
        await connection.promise().query(
            'DELETE FROM accounts WHERE account_id = ?', userID
        );
    } catch (err) {
        console.error(err);
    }
    res.redirect('/table');
}



module.exports = {
    getHomepage, getsign_in, getBieudo, gettable, getvideo, getsign_up, postCreateUser, getUpdateUser, postUpdateUser, postDeleteUser,
    postHandleRemoveUser
}