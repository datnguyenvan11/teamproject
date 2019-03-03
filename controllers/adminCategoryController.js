var categoryModel = require("../models/categoryModel");
var cloudinary = require("cloudinary").v2;

const errorParth = "admin/contentErr.ejs";

//Category create
exports.generateCategoryCreate = function (req, res) {
    res.render("admin/contentCategory/contentCategoryCreate.ejs");
};
exports.processCategoryCreate = function (req, res) {
    var category = new categoryModel({
        categoryName: req.body.categoryName,
        categoryShortDescription: req.body.categoryShortDescription,
        categoryType: req.body.categoryType,
        action: 1,   //1:còn hoạt động, 0: đã xóa
        createdAt: new Date(),
        updateAt: null,
        deleteAt: null
    });
    // Bổ sung xử lý lưu list ảnh
    if (req.files && req.files.categoryImage != undefined) {
        var fileGettingUploaded = req.files.categoryImage.data;
        cloudinary.uploader
            .upload_stream(function (error, result) {
                if (error) {
                    res.render(errorParth, {message: "Có lỗi trong quá trình lưu ảnh"});
                } else {
                    var imageUrl = result.url;
                    category.categoryImage = imageUrl;
                    category.save();
                    res.render("admin/contentCategory/contentCategoryCreateSuccess.ejs", {"list": category});
                }
            })
            .end(fileGettingUploaded);
    } else {
        res.render(errorParth, {message: "Lỗi: không có ảnh"});
    }
};

//List
exports.generateCategoryList = function (req, res) {
    categoryModel.find({action: 1}, function (err, category) {
        if (err) {
            res.render(errorParth, {message: "Lỗi tải trang, vui lòng thử lại!"});
        } else {
            res.render("admin/contentCategory/contentCategoryList.ejs", {"list": category});
        }
    });
};

//Detail
exports.generateCategoryDetail = function (req, res) {
    var categoryId = req.body.categoryId;
    categoryModel.findOne({_id: categoryId}, function (err, category) {
        if (err) {
            res.render(errorParth, {message: "Lỗi tải trang, vui lòng thử lại!"});
        } else {
            res.render("admin/contentCategory/contentCategoryDetail.ejs", {"list": category});
        }
    });
};

//Edit
exports.generateCategoryEdit = function (req, res) {
    var categoryId = req.body.categoryId;
    categoryModel.findOne({_id: categoryId}, function (err, category) {
        if (err) {
            res.render(errorParth, {message: "Lỗi tải trang, vui lòng thử lại!"});
        } else {
            res.render("admin/contentCategory/contentCategoryEdit.ejs", {"list": category});
        }
    });
};
exports.processCategoryEdit = function (req, res) {
    var conditions = {_id: req.body.categoryId};
    var update = {};
    if (req.body.categoryName != null && req.body.categoryName != '') {
        update.categoryName = req.body.categoryName;
    }
    if (req.body.categoryType != null && req.body.categoryType != '') {
        update.categoryType = req.body.categoryType;
    }
    if (req.body.categoryShortDescription != null && req.body.categoryShortDescription != '') {
        update.categoryShortDescription = req.body.categoryShortDescription;
    }
    if (req.body.action != null && req.body.action != '') {
        update.action = req.body.action;
        if(update.action == 1){
            update.updateAt = new Date();
        }else{update.deleteAt = new Date()}
    }
    if (req.files && req.files.categoryImage != undefined) {
        var fileGettingUploaded = req.files.categoryImage.data;
        cloudinary.uploader
            .upload_stream(function (error, result) {
                if (error) {
                    res.render(errorParth, {message: "Có lỗi trong quá trình lưu ảnh"});
                } else {
                    var imageUrl = result.url;
                    update.categoryImage = imageUrl;
                    categoryModel.findOneAndUpdate(conditions, update, function (err, category) {
                        if (err) {
                            res.render(errorParth, {message: "Có lỗi trong quá trình lưu dữ liệu"});
                        } else {
                            categoryModel.findOne({_id: conditions}, function (err, category) {
                                console.log(category);
                                res.render("admin/contentCategory/contentCategoryDetail.ejs", {"list": category});
                            });
                        }
                    });
                }
            })
            .end(fileGettingUploaded);
    } else {
        categoryModel.findOneAndUpdate(conditions, update, function (err, category) {
            if (err) {
                res.render(errorParth, {message: "Có lỗi trong quá trình lưu dữ liệu"});
            } else {
                categoryModel.findOne({_id: conditions}, function (err, category) {
                    res.render("admin/contentCategory/contentCategoryDetail.ejs", {"list": category});
                });
            }
        });
    }
};

//Delete Action
exports.processCategoryDelete = function (req, res) {
    var conditions = {_id: req.body.categoryId};
    var update = {action: 0, deleteAt: new Date()};
    categoryModel.findOneAndUpdate(conditions, update, function (err) {
        if (err) {
            res.render(errorParth, {message: "Lỗi xóa, vui lòng thử lại!"});
        } else {
            categoryModel.findOne({_id: conditions}, function (err, category) {
                if (err) {
                    res.render(errorParth, {message: "Lỗi tải trang, vui lòng thử lại!"});
                } else {
                    res.render("admin/contentCategory/contentCategoryDeleteDetail.ejs", {"list": category});
                }
            });
        }
    })
};

//Delete List
exports.generateCategoryDeleteList = function (req, res) {
    categoryModel.find({action: 0}, function (err, category) {
        if (err) {
            res.render(errorParth, {message: "Lỗi tải trang, vui lòng thử lại!"});
        } else {
            res.render("admin/contentCategory/contentCategoryDeleteList.ejs", {"list": category});
        }
    });
};

//Delete Detail
exports.generateCategoryDeleteDetail = function (req, res) {
    var categoryId = req.body.categoryId;
    categoryModel.findOne({_id: categoryId}, function (err, category) {
        if (err) {
            res.render(errorParth, {message: "Lỗi tải trang, vui lòng thử lại!"});
        } else {
            res.render("admin/contentCategory/contentCategoryDeleteDetail.ejs", {"list": category});
        }
    });
};