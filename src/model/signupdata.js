//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection/
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const Schema = mongoose.Schema;


const SignupSchema = new Schema({
    email: String,
    password: String,
    number: String
});

//Model creation 
var Signupdata =  mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;