//require express, router, body-parser,cookie-parser, mongoose, config, loudinary
const express = require("express");
const app = express();
const router = require("./routes/appRouter");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");
const config = require("./helpers/config");
const mongoDbUrl = config.dbUrl;
const port = process.env.PORT || 9999;
// connect mongo
mongoose.connect(mongoDbUrl, {useNewUrlParser: true});
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
app.use(cookieParser());
app.use(express.static("public"));
app.use(fileUpload());
//router
router.routing(app);
//listen
app.listen(port, function () {
    console.log("Run success!");
});


