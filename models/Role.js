const mongoose = require("mongoose")

const Schema = mongoose.Schema

const RoleSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Roles',RoleSchema);