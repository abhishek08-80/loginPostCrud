const { string } = require('joi');
const mongoose = require('mongoose');

 
const userSchema = new mongoose.Schema({
    "userName": "String",
    "email": "String",
    "password" : "string"
});

module.exports = mongoose.model('User', userSchema);
