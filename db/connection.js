//DEPENDENCIES
const mysql = require ("mysql");
require("dotenv").config();

//CONNECTION SET UP
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "employees"
});

connection.connect(function(err) {
    // console.log(process.env.MYSQL_PASSWORD)
    if (err) throw err;
    //initial questions function:
});

conn