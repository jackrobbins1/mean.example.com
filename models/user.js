var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var passportLocalMongoose = require('passport-local-mongoose');

//Create a schema
var User = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email must be unique']
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: [true, 'Username must be unique']
    },
    first_name: String,
    last_name: String, 
    type: String,
    admin: {
        type: Boolean,
        default: false
    },
    hash: {
        type: String,
        required: [true, 'There was a problem creating your password']
    },
    salt: {
        type: String,
        required: [true, 'There was a problem creating your password']
    },
    created:{
        type: Date,
        default: Date.now
    },
    modified:{
        type: Date,
        default: Date.now
    }


  });

User.pre('save', function(next){
    this.modified = new Date().toISOString();
    next();
});

User.plugin(uniqueValidator);
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);