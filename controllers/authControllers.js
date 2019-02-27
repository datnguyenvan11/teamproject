//require model + config + jwt
var adminModel = require("../models/adminModel");
var config = require("../helpers/config");
var jwt = require("jsonwebtoken");

exports.isAuthenticated = function(req, res, next) {
    var token = req.cookies.auth;
    if (token) {
        jwt.verify(token, config.jwtSecret, function(err, payload) {
            if (err) {
                res.render("admin/adminErr.ejs", {message: "Xác thực admin lỗi!"});
            } else {
                adminModel.findOne({"email": payload.email}, function(err, admin) {
                    if (admin) {
                        req.admin = admin;
                        next();
                    } else {
                        res.render("admin/adminErr.ejs", {message: "Xác thực admin lỗi!"});
                    }
                })
            }
        });
    } else {
        res.render("admin/adminErr.ejs", {message: "Xác thực admin lỗi!"});
    }
};