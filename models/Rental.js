const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RentalSchema = Schema({
    since: {
        type: Date,
        default: Date.now()
    },
    to: {
        type: Date,
        default: Date.now()
    },
    totalPrice: {
        type: Number,
        required: true
    },
    pickupPlace: {
        type: String,
        required: true
    },
    returnPlace: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'Users'
    }
});

module.exports = mongoose.model('Rentals',RentalSchema);