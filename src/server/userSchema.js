//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//TODO: Validation
//Server side validation
var userModelSchema = new Schema({
    firstName: String,
    lastName: String
});

// var userModel = ;
module.exports = mongoose.model('UserModel', userModelSchema)
