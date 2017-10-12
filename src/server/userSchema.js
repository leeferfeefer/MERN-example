//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

//TODO: Validation
//Server side validation
var userSchema = new Schema({
    firstName: String,
    lastName: Date
});
