var mongoose = require('mongoose');

var contactModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    gender: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var contact = module.exports = mongoose.model('contact', contactModel);
module.exports.get =    function (callback, limit) {
    contact.find(callback).limit(limit);
}