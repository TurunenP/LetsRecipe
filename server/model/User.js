// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password: String
// })

// const UserModel = mongoose.model('users', UserSchema)

// module.exports = UserModel

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
