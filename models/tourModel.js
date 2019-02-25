const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var tourSchema = new Schema({
    tourName: {type: String},
    tourFId: {type: String},
    tourImage: {type: String},
    tourDayGo: {type: String},
    tourTotalDay: {type: Number},
    tourPrice: {type: String},
    tourNumberOfSeats: {
        type: Number,
        min: 0,
    },
    tourNumberOfSeatsAvailable: {
        type: Number,
        min: 0,
    },
    tourShortDescription: {type: String},
    tourType: {type: String },
    tourCategory: {type: String },
    tourDescription:{type: String },
    tourDateGo: {type: String},
    tourDateGoCome: {type: String},
    tourGoFlight: {type: String},
    tourDateReturn: {type: String},
    tourDateReturnCome: {type: String},
    tourReturnFlight: {type: String},
    tourHotel: {type: String},
    tourGuideName: {type: String},
    tourGuideAddress: {type: String},
    tourGuideTel: {type: String},
    tourFocusDay: {type: String},
    tourConcentratedPlace: {type: String},
    tourNote: {type: String},
    action: {type: Number},
    status: {type: Number},
    createdAt: {type: Date},
    updateAt: {type: Date},
    deleteAt: {type: Date}
});

module.exports = mongoose.model('tour', tourSchema);

//cần thêm validation
