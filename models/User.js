const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema({
   name: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true,
       max: 255,
       min: 6
   },
   password: {
       type: String,
       required: true,
       min: 6,
       max: 1024
   },
   age: {
       type: Number,
       required: true,
       min: [18,'Za mało lat']
   },
/*   roleId: {
       type: Schema.Types.ObjectId, ref: 'Roles'
   }*/
});

module.exports = mongoose.model('Users',UserSchema);