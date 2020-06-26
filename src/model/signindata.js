//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection/
mongoose.connect('mongodb://localhost:27017/library');

//Schema definition
const Schema = mongoose.Schema;


const SigninSchema = new Schema({
    email: String,
    password: String
});

//Model creation 
var Signindata =  mongoose.model('signindata',SigninSchema);

module.exports = Signindata;