var mongoose = require('mongoose');
varSchema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: {type: String, lowercase: true},
    age: {type:Number, default: 0},
    favourites: [String],
    marks : [Numbers],
    password: { type: String,minlength:5,maxlength:15 },
    createdAt: { type: Date, default: new Date()}
}) ;

var User = mongoose.model('User', userSchema);

module.exports = User;
