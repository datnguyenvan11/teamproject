var adminController = require('../controllers/adminControllers');
var clientController = require('../controllers/clientControllers');
var authController = require('../controllers/authControllers');

exports.routing = function (app) {
//Client Page
    //home page
    app.get("/", clientController.home);
    //Tour Detail
    app.post("/tour/detail", clientController.tourDetail);
    //Tour List
    app.post("/tour/list", clientController.tourList);
    //Tour list all
    app.post("/tour/list/all", clientController.tourListAll);
    //service
    app.get("/service", clientController.service);
    //rate
    app.get("/rate", clientController.rate);
    //contact
    app.get("/contact", clientController.contact);

//Admin Page
    //Admin login
    app.get("/admin", adminController.generateAdminLogin);
    app.post("/admin/login", adminController.processAdminLogin);
    //Admin register
    app.get("/admin/register", adminController.generateAdminRegister);
    app.post("/admin/register", adminController.processAdminRegister);
    // Logout
    app.get("/admin/logout", authController.isAuthenticated, adminController.logout);
    //Admin home
    app.get("/admin/home", authController.isAuthenticated, adminController.generateAdminHome);
    //Admin List
    app.get("/admin/list", authController.isAuthenticated, adminController.listAdmin);
    //Tour Create
    app.get("/admin/tour/create", authController.isAuthenticated, adminController.generateTourCreate);
    app.post("/admin/tour/create/save", authController.isAuthenticated, adminController.processTourCreate);
    //Tour Create Success
    // app.get("/admin/tour/create/success", adminController.generateTourCreateSuccess);
    //Tour List
    app.get("/admin/tour/list", authController.isAuthenticated, adminController.listTour);
    //Tour Detail
    app.post("/admin/tour/detail", authController.isAuthenticated, adminController.generateTourDetail);
    //Tour Edit
    app.post("/admin/tour/edit", authController.isAuthenticated, adminController.processEditTour);
    app.post("/admin/tour/edit/save", authController.isAuthenticated, adminController.processEditTourSave);
    //Tour Delete
    app.post("/admin/tour/delete", authController.isAuthenticated, adminController.processDeleteTour);
    //Tour Deleted List
    app.get("/admin/tour/delete/list", authController.isAuthenticated, adminController.listDeleteTour);
    //Tour Delete Detail
    app.post("/admin/tour/delete/detail", authController.isAuthenticated, adminController.generateTourDeleteDetail);
    //Order List
    app.get("/admin/order/list", authController.isAuthenticated, adminController.listOrder);
    //err
    // app.get("/admin/err", authController.isAuthenticated, adminController.generateErr);
};


