//require model + cloudinary
var tourModel = require("../models/tourModel");

//home
exports.home = function (req, res) {
    tourModel.find({action: 1}, function (err, tour) {
        res.render("client/contentHomePage.ejs",{"list": tour});
    });
};
//Tour Detail
exports.tourDetail = function (req, res) {
    var tourId = req.body.tourId;
    tourModel.findOne({_id: tourId}, function (err, tour) {
        res.render("client/contentTourDetail.ejs", {"list": tour});
    });
};

//Tour List
exports.tourList = function (req, res) {
    var conditions = {tourCategory: req.body.tourCategory, action: 1};
    tourModel.find(conditions, function (err, tour) {
        res.render("client/contentTourList.ejs", {"list": tour});
    });
};

//Tour List all
exports.tourListAll = function (req, res) {
    var conditions = { action: 1};
    tourModel.find(conditions, function (err, tour) {
        res.render("client/contentTourListAll.ejs", {"list": tour});
    });
};

//service
exports.service = function (req, res) {
    res.render("client/contentService.ejs")
};

//rate
exports.rate = function (req, res) {
    res.render("client/contentRate.ejs")
};

//contact
exports.contact = function (req, res) {
    res.render("client/contentContact.ejs")};