const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var adminSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    dateOfBirth: {type: Date},
    gender: {type: String},
    tell: {type: String},
    address: {type: String},
    createdAt: {
        type: Date,
        default: Date.now
    }
});

adminSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('admin', adminSchema);