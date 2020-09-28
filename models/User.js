const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema({
   name: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   },
   age: {
       type: Number,
       required: true,
       min: [18,'Za mało lat']
   },
   roleId: {
       type: Schema.Types.ObjectId, ref: 'Roles'
   }
});

module.export= mongoose.model('Users',UserSchema);