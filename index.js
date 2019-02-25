//require express, router, body-parser, mongoose, loudinary
const express = require("express");
const app = express();
const router = require("./routes/appRouter");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");
const mongoDb = "mongodb://admin_trung:abcd1234@ds155490.mlab.com:55490/tourist";
var port = process.env.PORT || 9999;
// connect mongo
mongoose.connect(mongoDb, {useNewUrlParser: true});
// cloudinary
cloudinary.config({
    cloud_name: 'dyi6c1dgi',
    api_key: '679713918597911',
    api_secret: 't3xiT15hfyCeBMMqZCM1YrVH3Hc'
});
//set view, use body-parser + public + fileUpload
app.set("views", "views");
app.set("views engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(fileUpload());
//routing
router.routing(app);
//listen
app.listen(port, function () {
    console.log("Run success!");
});