
const mysql = require('mysql2');

// Connection to mysql - would update with use of dotenv if had more time to protect env variables

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'companyinfo_db',
    password: 'Cheese'

});

// Exporting connection
module.exports = connection;