const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OpinionSchema = Schema({
    content: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    carId: {
        type: Schema.Types.ObjectId, ref: 'Cars'
    }
})

module.exports = mongoose.model('Opinions',OpinionSchema);