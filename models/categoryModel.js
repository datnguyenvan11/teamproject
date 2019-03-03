const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var categorySchema = new Schema({
    categoryName: { //đồng thời là mã của category
        type: String,
        unique: true,
    },
    categoryShortDescription: {type: String},
    categoryType: {type: String },
    categoryImage: {type: String},
    action: {type: Number},
    createdAt: {type: Date},
    updateAt: {type: Date},
    deleteAt: {type: Date}
});

module.exports = mongoose.model('category', categorySchema);
