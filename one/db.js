const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host:"localhost", 
    user:"root",
    password:"",
    database:"php_class_admin"
})

module.exports = db;