//require model + cloudinary
var tourModel = require("../models/tourModel");
var orderModel = require("../models/orderModel");

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

//Tour Order
exports.generateOrder = function (req, res) {
    var tourId = req.body.tourId;
    tourModel.findOne({_id: tourId}, function (err, tour) {
        res.render("client/contentTourOrder.ejs", {"list": tour});
    });
};
exports.processOder = function (req, res) {
    var newOrder = new orderModel({
        tourId: req.body.tourId,
        tourName: req.body.tourName,
        tourPrice: req.body.tourPrice,
        tourPriceChild: req.body.tourPriceChild,
        tourPriceBaby: req.body.tourPriceBaby,
        orderEmail: req.body.email,
        orderFullName: req.body.name,
        orderTell: req.body.phone,
        orderDeskPhone: req.body.phonenumber,
        orderAddress: req.body.address,
        orderNumberOfSeatTotal: req.body.usernumber,
        orderNumberOfSeatAdult: req.body.person,
        orderNumberOfSeatChild: req.body.children,
        orderNumberOfSeatBaby: req.body.trenho,
        createdAt: new Date(),
        paymentID: req.body.paymentID,
        status: 0
    });
    newOrder.save(function (err, order) {
        if (err) {
            res.redirect("/");
            return
        }
        res.redirect("/");
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
exports.dattour = function (req, res) {
    res.render("client/contentTourOrder.ejs")};