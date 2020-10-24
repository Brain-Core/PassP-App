const mongoose = require('../connect/index');

const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    phone: {type: String,  required: true},
    username: {type: String,  required: true},
    password: {type: String,  required: true},
    createAt:{type: Date, default: Date.now()}
});

module.exports = mongoose.model('users', userSchema);