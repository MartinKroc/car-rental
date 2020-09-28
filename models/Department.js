const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    geoLoc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    cars: [{
        type: Schema.Types.ObjectId, ref: 'Cars'
    }]
});

module.exports = mongoose.model('Departments', DepartmentSchema)