//require model
var registerModel = require("../models/userModel");

//List Tour
exports.listTour = function (req, res) {
    res.render("admin/contentListTour.ejs")
};

//Create tour
exports.generateCreateTourFom = function (req, res) {
    res.render("admin/contentCreateTour.ejs")
};
exports.processCreateTour = function () {

};

//Edit tour
exports.generateEditTourFom = function (req, res) {
    res.render("admin/contentEditTour.ejs")
};
exports.processEditTour = function () {

};

//Delete tour
exports.generateDeleteTourFom = function (req, res) {
    res.render("admin/contentEditTour")
};
exports.processDeleteTour = function () {

};

//List tour đã xóa
exports.listDeleteTour = function (req, res) {

};

//List admin
exports.listAdmin = function (req, res) {
    res.render("admin/contentListAdmin.ejs");
};

//List Order
exports.listOrder = function (req, res) {
    res.render("admin/contentListOrder.ejs");
};

//List User
exports.listUser = function (req, res) {
    registerModel.find({}, function (err, user) {
        res.render("admin/contentListUsers.ejs",{
            "list": user
        });
    });
};
