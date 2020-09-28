const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    car_type: {
        type: String,
        enum: ['Osobowe','SUV','Ciezarowe','Motocykl']
    },
    availableNow: {
        type: Boolean,
        required: true
    },
    priceForDay: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    departmentId: {
        type: Schema.Types.ObjectId, ref: 'Departments'
    }
});

module.exports = mongoose.model('Cars', CarSchema);