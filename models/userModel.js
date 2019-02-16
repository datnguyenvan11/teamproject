const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    confirmPassword: {type: String},
    dateOfBirth: {type: Date},
    tell: {type: String},
    address: {type: String},
    thumbnail: {type: String},
    createdAt: {type: Date}
});

module.exports = mongoose.model('user', userSchema);

