var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    socketId:  { type: String, required: true },
    username: String,
    userstate: {
        type:String,
    },
    usercountry: {
        type:String,
    },
    role : {
        type:Number,
        default: 0 
    },

});

module.exports = mongoose.model('user', userSchema);