var adminController = require('../controllers/adminControllers');
var clientController = require('../controllers/clientControllers');

exports.routing = function (app) {
//Client Page
    //home page
    app.get("/", clientController.home);
    //Tour Detail
    app.post("/tour/detail", clientController.tourDetail);
    //Tour List
    app.post("/tour/list", clientController.tourList);
    //service
    app.get("/service", clientController.service);
    //rate
    app.get("/rate", clientController.rate);
    //contact
    app.get("/contact", clientController.contact);
    app.get("/list/tour", clientController.listTour);

//Admin Page
    //Admin home
    app.get("/admin/home", adminController.generateAdminHome);
    //Admin List
    app.get("/admin/list", adminController.listAdmin);
    //Tour Create
    app.get("/admin/tour/create", adminController.generateTourCreate);
    app.post("/admin/tour/create/save", adminController.processTourCreate);
    //Tour Create Success
    // app.get("/admin/tour/create/success", adminController.generateTourCreateSuccess);
    //Tour List
    app.get("/admin/tour/list", adminController.listTour);
    //Tour Detail
    app.post("/admin/tour/detail", adminController.generateTourDetail);
    //Tour Edit
    app.post("/admin/tour/edit", adminController.processEditTour);
    app.post("/admin/tour/edit/save", adminController.processEditTourSave);
    //Tour Delete
    app.post("/admin/tour/delete", adminController.processDeleteTour);
    //Tour Deleted List
    app.get("/admin/tour/delete/list", adminController.listDeleteTour);
    //Tour Delete Detail
    app.post("/admin/tour/delete/detail", adminController.generateTourDeleteDetail);
    //Order List
    app.get("/admin/order/list", adminController.listOrder);
    //err
    app.get("/admin/err", adminController.generateErr);
};


