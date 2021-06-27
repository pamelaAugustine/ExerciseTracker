var mongoose = require('mongoose');
require('dotenv').config()

const Schema = mongoose.Schema;

var usernameSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
   
})

var Username = mongoose.model('username', usernameSchema)


module.exports = Username