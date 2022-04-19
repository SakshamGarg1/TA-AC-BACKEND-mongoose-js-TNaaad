var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var addressSchema = new Schema({
    village: String,
    city: String,
    State: String,
    pin: Number,
    user: Schema.Types.ObjectId
})