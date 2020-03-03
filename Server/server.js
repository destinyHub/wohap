const express = require("express");
const PORT = process.env.PORT||"3001";
const bodyParser = require("body-parser");
var routes = require('./routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
app.listen(PORT , () => {
    console.log("go to localhost:3001 ");
});