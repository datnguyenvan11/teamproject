//require model + cloudinary + config + jwt
var tourModel = require("../models/tourModel");
var orderModel = require("../models/orderModel");
var cloudinary = require("cloudinary").v2;
var adminModel = require("../models/adminModel");
var config = require("../helpers/config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

//AdminRegister
exports.generateAdminRegister = function (req, res) {
    res.render("admin/adminRegister.ejs");
};
exports.processAdminRegister = function(req, res) {
    var email = req.body.email;
    adminModel.findOne({"email": email}, function(err, admin) {
        if(err){
            res.render("admin/adminErr.ejs", {message: "Đăng ký không thành công"});
        }else if (admin){
            res.render("admin/adminErr.ejs", {message: "Đăng ký không thành công. Email đã được đăng ký bởi tài khoản khác!"});
        }else {
            var newAdmin = new adminModel(req.body);
            newAdmin.hash_password = bcrypt.hashSync(req.body.password, 10);
            newAdmin.save(function (err, admin) {
                if (err) {
                    res.render("admin/adminErr.ejs", {message: "Đăng ký không thành công"});
                    return
                }
                admin.hash_password = undefined;
                res.redirect("/admin");
            });
        }
    });
};

//Admin Login
exports.generateAdminLogin = function (req, res) {
    res.render("admin/adminLogin.ejs");
};
exports.processAdminLogin = function(req, res) {
    var password = req.body.password;
    var email = req.body.email;
    adminModel.findOne({"email": email}, function(err, admin) {
        if (!admin) {
            res.render("admin/adminErr.ejs", {message: "Đăng nhập thất bại. Email không đúng"});
        } else if (admin && admin.comparePassword(password)) {
            var payload = { email: admin.email };
            var jwtToken = jwt.sign(payload, config.jwtSecret, { expiresIn: 60*60*4});
            res.cookie("auth", jwtToken);
            res.redirect("/admin/home");
        } else {
            res.render("admin/adminErr.ejs", {message: "Đăng nhập thất bại password không đúng"});
        }
    });
};

//logout
exports.logout = function(req, res){
    res.clearCookie("auth");
    res.redirect("/admin")
};

//Admin Home
exports.generateAdminHome = function (req, res) {
    res.render("admin/contentAdminHome.ejs");
};

//Admin List
exports.listAdmin = function (req, res) {
    res.render("admin/contentAdminList.ejs");
};

//Tour Create
exports.generateTourCreate = function (req, res) {
    res.render("admin/contentTourCreate.ejs")
};
exports.processTourCreate = function (req, res) {
    // var tour = new tourModel(req.body);
    var tour = new tourModel({
            tourName: req.body.tourName,
            tourFId: req.body.tourFId,
            tourDayGo: req.body.tourDayGo,
            tourTotalDay: req.body.tourTotalDay,
            tourPrice: req.body.tourPrice,
            tourNumberOfSeats: req.body.tourNumberOfSeats,
            tourNumberOfSeatsAvailable: req.body.tourNumberOfSeats,
            tourShortDescription: req.body.tourShortDescription,
            tourType: req.body.tourType,
            tourCategory: req.body.tourCategory,
            tourDescription: req.body.tourDescription,
            tourDateGo: req.body.tourDateGo,
            tourDateGoCome: req.body.tourDateGoCome,
            tourGoFlight: req.body.tourGoFlight,
            tourDateReturn: req.body.tourDateReturn,
            tourDateReturnCome: req.body.tourDateReturnCome,
            tourReturnFlight: req.body.tourReturnFlight,
            tourHotel: req.body.tourHotel,
            tourGuideName: req.body.tourGuideName,
            tourGuideAddress: req.body.tourGuideAddress,
            tourGuideTel: req.body.tourGuideTel,
            tourFocusDay: req.body.tourFocusDay,
            tourConcentratedPlace: req.body.tourConcentratedPlace,
            tourNote: req.body.tourNote,
            action: 1,   //1:còn hoạt động, 0: đã xóa
            status: 1,   //1: còn chỗ, O: hết chỗ/hết thời gian hoạt động
            createdAt: new Date(),
            updateAt: null,
            deleteAt: null
    });
    // bổ sung xử lý lưu list ảnh
    if (req.files && req.files.tourImage != undefined) {
        var fileGettingUploaded = req.files.tourImage.data;
        cloudinary.uploader
            .upload_stream(function (error, result) {
                if (error) {
                    res.render("admin/contentErr.ejs", {message: "Có lỗi trong quá trình lưu ảnh"});
                } else {
                    var imageUrl = result.url;
                    tour.tourImage = imageUrl;
                    tour.save();
                    res.render("admin/contentTourCreateSuccess.ejs", {"list": tour});
                }
            })
            .end(fileGettingUploaded);
    } else {
        tour.tourImage = "https://www.touchtaiwan.com/images/default.jpg";
        tour.save();
        res.render("admin/contentTourCreateSuccess.ejs", {"list": tour});
    }
};

//Tour List
exports.listTour = function (req, res) {
    tourModel.find({action: 1}, function (err, tour) {
        if (err) {
            res.render("admin/contentErr.ejs", {message: "Lỗi tải trang, vui lòng thử lại!"});
        } else {
            res.render("admin/contentTourList.ejs", {"list": tour});
        }
    });
};

//Tour Detail
exports.generateTourDetail = function (req, res) {
    var tourId = req.body.tourId;
    tourModel.findOne({_id: tourId}, function (err, tour) {
        if (err) {
            res.render("admin/contentErr.ejs", {message: "Lỗi tải trang, vui lòng thử lại!"});
        } else {
            res.render("admin/contentTourDetail.ejs", {"list": tour});
        }
    });
};

//Tour Edit
exports.processEditTour = function (req, res) {
    var tourId = req.body.tourId;
    tourModel.findOne({_id: tourId}, function (err, tour) {
        if (err) {
            res.render("admin/contentErr.ejs", {message: "Lỗi tải trang, vui lòng thử lại!"});
        }else {
            res.render("admin/contentTourEdit.ejs", {"list": tour});
        }
    });
};

exports.processEditTourSave = function (req, res) {
    var conditions = {_id: req.body.tourId};
    var update = {updateAt: new Date()};
    if (req.body.tourName != null && req.body.tourName != '') {
        update.tourName = req.body.tourName;
    }
    if (req.body.tourFId != null && req.body.tourFId != '') {
        update.tourFId = req.body.tourFId;
    }
    if (req.body.tourDayGo != null && req.body.tourDayGo != '') {
        update.tourDayGo = req.body.tourDayGo;
    }
    if (req.body.tourTotalDay != null && req.body.tourTotalDay != '') {
        update.tourTotalDay = req.body.tourTotalDay;
    }
    if (req.body.tourPrice != null && req.body.tourPrice != '') {
        update.tourPrice = req.body.tourPrice;
    }
    if (req.body.tourNumberOfSeats != null && req.body.tourNumberOfSeats != '') {
        update.tourNumberOfSeats = req.body.tourNumberOfSeats;
    }
    if (req.body.tourShortDescription != null && req.body.tourShortDescription != '') {
        update.tourShortDescription = req.body.tourShortDescription;
    }
    if (req.body.tourType != null && req.body.tourType != '') {
        update.tourType = req.body.tourType;
    }
    if (req.body.tourCategory != null && req.body.tourCategory != '') {
        update.tourCategory = req.body.tourCategory;
    }
    if (req.body.tourDescription != null && req.body.tourDescription != '') {
        update.tourDescription = req.body.tourDescription;
    }
    if (req.body.tourDateGo != null && req.body.tourDateGo != '') {
        update.tourDateGo = req.body.tourDateGo;
    }
    if (req.body.tourDateGoCome != null && req.body.tourDateGoCome != '') {
        update.tourDateGoCome = req.body.tourDateGoCome;
    }
    if (req.body.tourGoFlight != null && req.body.tourGoFlight != '') {
        update.tourGoFlight = req.body.tourGoFlight;
    }
    if (req.body.tourDateReturn != null && req.body.tourDateReturn != '') {
        update.tourDateReturn = req.body.tourDateReturn;
    }
    if (req.body.tourDateReturnCome != null && req.body.tourDateReturnCome != '') {
        update.tourDateReturnCome = req.body.tourDateReturnCome;
    }
    if (req.body.tourReturnFlight != null && req.body.tourReturnFlight != '') {
        update.tourReturnFlight = req.body.tourReturnFlight;
    }
    if (req.body.tourHotel != null && req.body.tourHotel != '') {
        update.tourHotel = req.body.tourHotel;
    }
    if (req.body.tourGuideName != null && req.body.tourGuideName != '') {
        update.tourGuideName = req.body.tourGuideName;
    }
    if (req.body.tourGuideAddress != null && req.body.tourGuideAddress != '') {
        update.tourGuideAddress = req.body.tourGuideAddress;
    }
    if (req.body.tourGuideTel != null && req.body.tourGuideTel != '') {
        update.tourGuideTel = req.body.tourGuideTel;
    }
    if (req.body.tourFocusDay != null && req.body.tourFocusDay != '') {
        update.tourFocusDay = req.body.tourFocusDay;
    }
    if (req.body.tourConcentratedPlace != null && req.body.tourConcentratedPlace != '') {
        update.tourConcentratedPlace = req.body.tourConcentratedPlace;
    }
    if (req.body.tourNote != null && req.body.tourNote != '' ) {
        update.tourNote = req.body.tourNote;
    }
    if (req.body.action != null && req.body.action != '') {
        update.action = req.body.action;
    }
    console.log(update);
    if (req.files && req.files.tourImage != undefined) {
        var fileGettingUploaded = req.files.tourImage.data;
        cloudinary.uploader
            .upload_stream(function (error, result) {
                if (error) {
                    res.render("admin/contentErr.ejs", {message: "Lỗi sửa 1, vui lòng thử lại!"});
                } else {
                    var imageUrl = result.url;
                    update.tourImage = imageUrl;
                    tourModel.findOneAndUpdate(conditions, update, function (err, tour) {
                        if (err) {
                            res.render("admin/contentErr.ejs", {message: "Lỗi sửa 2, vui lòng thử lại!"});
                        } else {
                            tourModel.findOne({_id: conditions}, function (err, tour) {
                                res.render("admin/contentTourDeleteDetail.ejs", {"list": tour});
                            });
                        }
                    });
                }
            })
            .end(fileGettingUploaded);
    } else {
        tourModel.findOneAndUpdate(conditions, update, function (err, tour) {
            if (err) {
                res.render("admin/contentErr.ejs", {message: "Lỗi sửa 3, vui lòng thử lại!"});
            } else {
                tourModel.findOne({_id: conditions}, function (err, tour) {
                    res.render("admin/contentTourDeleteDetail.ejs", {"list": tour});
                });
            }
        });
    }
};

//Tour Delete
exports.processDeleteTour = function (req, res) {
    var conditions = {_id: req.body.tourId};
    var update = {action: 0, deleteAt: new Date()};
    tourModel.findOneAndUpdate(conditions, update, function (err) {
        if (err) {
            res.render("admin/contentErr.ejs", {message: "Lỗi xóa, vui lòng thử lại!"});
        } else {
            tourModel.findOne({_id: conditions}, function (err, tour) {
                res.render("admin/contentTourDeleteDetail.ejs", {"list": tour});
            });
        }
    })
};

//Tour Delete List
exports.listDeleteTour = function (req, res) {
    tourModel.find({action: 0}, function (err, tour) {
        res.render("admin/contentTourDeleteList.ejs", {"list": tour});
    });
};

//Tour Delete Detail
exports.generateTourDeleteDetail = function (req, res) {
    var tourId = req.body.tourId;
    tourModel.findOne({_id: tourId}, function (err, tour) {
        res.render("admin/contentTourDeleteDetail.ejs", {"list": tour});
    });
};

//Order List
exports.listOrder = function (req, res) {
    orderModel.find( function (err, order) {
        res.render("admin/contentListOrder.ejs", {"list": order});
    });
};