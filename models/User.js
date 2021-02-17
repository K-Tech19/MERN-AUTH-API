const mongoose = require('../db/connection')
const options = {
    timestamps: true
}

//create schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    }, 
    password: {
        type: String,
        require: true
    }, 
    motto: String
}, options)

module.exports = mongoose.model('User', userSchema)