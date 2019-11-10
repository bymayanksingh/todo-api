var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
});

var User = new mongoose.model("User", UserSchema);

module.exports = {User}; 