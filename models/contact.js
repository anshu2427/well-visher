var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var contactSchema = new Schema({
contactname: {type: String, required: true},
contactmobile: {type: String, required: true},
contactemail: {type: String, required: true},
contactlocation: {type: String, required: true},
contactpurpose: {type: String, required: false},
contactmessage: {type: String, required: false}
}, {collection:'contactForm'});



module.exports = mongoose.model('Contact', contactSchema);