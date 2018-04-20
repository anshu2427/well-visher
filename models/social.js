var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var socialSchema = new Schema({
socialtitle: {type: String, required: true},
socialdesc: {type: String, required: true},
socialupload: {type: String, required: false}
}, {collection:'social'});



module.exports = mongoose.model('Social', socialSchema);