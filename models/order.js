const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var orderSchema = new Schema({
    userTell: {type: String},
    tourId: {type: String},
    numberOfSeats: {type: Number},
    price: {type: Number},
    totalAmount: {type: Number},
    createdAt: {type: Date},
    updateAt: {type: Date},
    deleteAt: {type: Date}
});

module.exports = mongoose.model('order', orderSchema);

//cần thêm validation