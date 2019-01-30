
var mysql = require("mysql");

//var connection = mysql.createConnection({
    //port: 8889,
    //host: "local host",
    //user: "root",
    //password: "root",
    //database: "burgers_db"

//});


///  NEED TO HOOK UP TO JAWAS
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{
  connection = mysql.createConnection({
    host: "___",
    user: "____",
    password: "_____",
    port: "_______",
    database: "______"

   });
}


connection.connect();

module.exports = connection;