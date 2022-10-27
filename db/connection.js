
const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'companyinfo_db',
    password: 'Cheese'
});

module.exports = connection;