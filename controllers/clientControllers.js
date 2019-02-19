//require model
var userModel = require("../models/userModel");

// Đăng nhập người dùng
exports.generateLogin = function (req, res) {
    res.render("client/contentHomePage.ejs")
};

exports.processLogin = function (req, res) {
    //xử lý đăng nhập// check email, password
};
exports.lienhe = function (req, res) {
    res.render("client/contentLienhe.ejs")};
// Register user
exports.generateRegister = function (req, res) {
    res.render("client/contentRegister.ejs")
};

exports.dichvu = function (req, res) {
    res.render("client/contentDIchvu.ejs")
};

exports.processRegister = function (req, res) {
    var user = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        tell: req.body.tell,
        address: req.body.address,
        createdAt: new Date()
    });
    // Bổ sung kiểm tra dữ liệu và lưu vào cơ sở dữ liệu // kiem tra e mail da ton tai chua//validate
    user.save();
    res.send("ban da dang ky tai khoan thanh cong");
};

