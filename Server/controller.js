

var response = require('./response');
var connection = require('./connection');

//contoh endpoint
// exports.users = function(req, res) {
//     connection.query('SELECT * FROM person', function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//         }
//     });
// };

//contoh endpoint
exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};