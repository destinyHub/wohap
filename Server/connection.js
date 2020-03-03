let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "whop"
});

con.connect(function (err){
    if(err) throw err;
    console.log("connected");
});

module.exports = con;