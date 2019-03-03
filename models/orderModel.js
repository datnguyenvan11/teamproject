const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var orderSchema = new Schema({
    tourId: {type: String},
    tourName: {type: String},
    tourPrice: {type: String},
    tourPriceChild: {type: String},
    tourPriceBaby: {type: String},
    orderEmail: {type: String},
    orderFullName: {type: String},
    orderTell: {type: String},
    orderDeskPhone: {type: String},
    orderAddress: {type: String},
    orderNumberOfSeatTotal: {type: Number},
    orderNumberOfSeatAdult: {type: Number},
    orderNumberOfSeatChild: {type: Number},
    orderNumberOfSeatBaby: {type: Number},
    orderTotalAmount: {type: Number},
    createdAt: {type: Date},
    paymentID: {type: String},
    status: {type: Number} //0. chua thanh toan; 1 da thanh toan; 2 huy tour
});

module.exports = mongoose.model('order', orderSchema);
