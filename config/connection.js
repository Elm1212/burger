
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 8889,
    host: "local host",
    user: "root",
    password: "root",
    database: "burgers_db"

});