//require express, router, body-parser, mongoose, ...
const express = require("express");
const app = express();
const router = require("./routes/appRouter");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const mongoDb = "mongodb://sa:abcd1234@ds159641.mlab.com:59641/shop";
var port = process.env.PORT || 9999;
//connect mongo
mongoose.connect(mongoDb, {useNewUrlParser: true});
//set view, use body-parser
app.set("views", "views");
app.set("views engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
//routing
router.routing(app);
//listen
app.listen(port, function () {
    console.log("Run success!");
});