const connection = require("../config/database")

const getAllaccounts = () => {

    // let [results, fields] = await connection.query('select * from accounts')
    // return results
    return new Promise((resolve, reject) => {
        connection.query('select * from accounts', (err, results) => {
            resolve(results);
        });
    })
}
module.exports = {
    getAllaccounts
}
