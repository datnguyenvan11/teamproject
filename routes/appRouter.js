var adminController = require('../controllers/adminControllers');
var clientController = require('../controllers/clientControllers');

exports.routing = function (app) {
//Trang client
    //Đăng nhập người dùng
    app.get("/", clientController.generateLogin);
    app.post("/", clientController.processLogin);
    //Đăng ký người dùng
    app.get("/register", clientController.generateRegister);
    app.post("/register", clientController.processRegister);
    app.get("/dichvu", clientController.dichvu);
    app.get("/lienhe", clientController.lienhe);
    app.get("/danhgia", clientController.danhgia);

//Trang admin
    //List Tour
    app.get("/admin/tour/list", adminController.listTour);
    //Create tour
    app.get("/admin/tour/create", adminController.generateCreateTourFom);
    app.post("/admin/tour/create/save", adminController.processCreateTour);
    //Edit tour (sửa, xóa mềm)
    app.get("/admin/tour/edit", adminController.generateEditTourFom);
    app.post("/admin/tour/edit/save", adminController.processEditTour);
    app.get('/admin/tour/delete', adminController.generateDeleteTourFom);
    app.post('/admin/tour/delete/save', adminController.processDeleteTour);
    //List tour đã xóa
    app.get('/admin/tour/list/delete', adminController.listDeleteTour);
    //List admin
    app.get("/admin/list-admins", adminController.listAdmin);
    //List Order
    app.get("/admin/list-orders", adminController.listOrder);
    //List User
    app.get("/admin/list-users", adminController.listUser);
    app.get("/admin/dashboard", adminController.dashboard);

    app.get("/admin/notifications", adminController.notifications);
    app.get("/admin/tables", adminController.tables);
    app.get("/admin/user", adminController.user);

};


