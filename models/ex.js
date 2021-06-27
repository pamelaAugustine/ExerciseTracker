var mongoose = require('mongoose');
require('dotenv').config()

const Schema = mongoose.Schema;

var exSchema = new Schema({
    userId: {
        type: String, 
        lowercase: true, 
        trim: true
        
    },
    description: {
        type: String, 
        lowercase: true, 
        trim: true 
    },
    duration: {
        type: String, 
        lowercase: true, 
        trim: true 
    },
    date: {
        type: String, 
        lowercase: true, 
        trim: true     
    }
})

var ExList = mongoose.model('exList', exSchema)
module.exports = ExList