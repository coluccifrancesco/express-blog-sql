const mysql = require('mysql2');
const password = process.env.PASSWORD;

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: `${password}`,
database: 'express-blog-sql'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

module.exports = connection;