//require model + cloudinary
var tourModel = require("../models/tourModel");
var cloudinary = require("cloudinary").v2;

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
                    res.redirect("admin/err");
                } else {
                    var imageUrl = result.url;
                    tour.tourImage = imageUrl;
                    tour.save();
                    res.render("admin/contentTourCreateSuccess.ejs", {"list": tour});
                }
            })
            .end(fileGettingUploaded);
    } else {
        console.log("Have no file");
        tour.tourImage = "https://www.touchtaiwan.com/images/default.jpg";
        tour.save();
        res.render("admin/contentTourCreateSuccess.ejs", {"list": tour});
    }
};

// Tour Create Success
// exports.generateTourCreateSuccess = function (req, res) {
//     var tourId = req.body.tourId;
//     tourModel.findOne({_id: tourId}, function (err, tour) {
//         res.render("admin/contentTourCreateSuccess.ejs", {
//             "list": tour
//         });
//     });
// };

//Tour List
exports.listTour = function (req, res) {
    tourModel.find({action: 1}, function (err, tour) {
        if (err) {
            res.redirect("admin/err");
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
            res.redirect("admin/err");
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
            res.redirect("admin/err");
        }else {
            res.render("admin/contentTourEdit.ejs", {"list": tour});
        }
    });
};

exports.processEditTourSave = function (req, res) {
    var conditions = {_id: req.body.tourId};
    var update = {updateAt: new Date()};
    if (req.body.tourName != null) {
        update.tourName = req.body.tourName;
    }
    if (req.body.tourFId != null) {
        update.tourFId = req.body.tourFId;
    }
    if (req.body.tourDayGo != null) {
        update.tourDayGo = req.body.tourDayGo;
    }
    if (req.body.tourTotalDay != null) {
        update.tourTotalDay = req.body.tourTotalDay;
    }
    if (req.body.tourPrice != null) {
        update.tourPrice = req.body.tourPrice;
    }
    if (req.body.tourNumberOfSeats != null) {
        update.tourNumberOfSeats = req.body.tourNumberOfSeats;
    }
    if (req.body.tourShortDescription != null) {
        update.tourShortDescription = req.body.tourShortDescription;
    }
    if (req.body.tourType != null) {
        update.tourType = req.body.tourType;
    }
    if (req.body.tourCategory != null) {
        update.tourCategory = req.body.tourCategory;
    }
    if (req.body.tourDescription != null) {
        update.tourDescription = req.body.tourDescription;
    }
    if (req.body.tourDateGo != null) {
        update.tourDateGo = req.body.tourDateGo;
    }
    if (req.body.tourDateGoCome != null) {
        update.tourDateGoCome = req.body.tourDateGoCome;
    }
    if (req.body.tourGoFlight != null) {
        update.tourGoFlight = req.body.tourGoFlight;
    }
    if (req.body.tourDateReturn != null) {
        update.tourDateReturn = req.body.tourDateReturn;
    }
    if (req.body.tourDateReturnCome != null) {
        update.tourDateReturnCome = req.body.tourDateReturnCome;
    }
    if (req.body.tourReturnFlight != null) {
        update.tourReturnFlight = req.body.tourReturnFlight;
    }
    if (req.body.tourHotel != null) {
        update.tourHotel = req.body.tourHotel;
    }
    if (req.body.tourGuideName != null) {
        update.tourGuideName = req.body.tourGuideName;
    }
    if (req.body.tourGuideAddress != null) {
        update.tourGuideAddress = req.body.tourGuideAddress;
    }
    if (req.body.tourGuideTel != null) {
        update.tourGuideTel = req.body.tourGuideTel;
    }
    if (req.body.tourFocusDay != null) {
        update.tourFocusDay = req.body.tourFocusDay;
    }
    if (req.body.tourConcentratedPlace != null) {
        update.tourConcentratedPlace = req.body.tourConcentratedPlace;
    }
    if (req.body.tourNote != null) {
        update.tourNote = req.body.tourNote;
    }
    if (req.body.tourNote != null) {
        update.tourNote = req.body.tourNote;
    }
    if (req.body.action != null) {
        update.action = req.body.action;
    }
    if (req.files && req.files.tourImage != undefined) {
        var fileGettingUploaded = req.files.tourImage.data;
        cloudinary.uploader
            .upload_stream(function (error, result) {
                if (error) {
                    res.redirect("admin/err");
                } else {
                    var imageUrl = result.url;
                    update.tourImage = imageUrl;
                    tourModel.findOneAndUpdate(conditions, update, function (err) {
                        if (err) {
                            res.redirect("admin/err");
                        } else {
                            res.render("admin/contentTourDetail.ejs", {"list": update});
                        }
                    });
                }
            })
            .end(fileGettingUploaded);
    } else {
        tourModel.findOneAndUpdate(conditions, update, function (err) {
            if (err) {
                res.redirect("admin/err");
            } else {
                res.render("admin/contentTourDetail.ejs", {"list": update});
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
            res.redirect("admin/err");
        } else {
            res.render("/admin/contentTourDeleteDetail.ejs", {"list": update});
        }
    })
};

//Tour Delete List
exports.listDeleteTour = function (req, res) {
    tourModel.find({action: 0}, function (err, tour) {
        res.render("admin/contentTourDeleteList.ejs", {
            "list": tour
        });
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
    res.render("admin/contentListOrder.ejs");
};

//Err
exports.generateErr = function (req, res) {
    res.render("admin/contentErr.ejs");
};


