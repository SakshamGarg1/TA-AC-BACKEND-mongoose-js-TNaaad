var mongoose = require('mongoose');
varSchema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type:Number, default: 0}
}) 