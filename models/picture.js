var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var pictureSchema = new Schema({
picturetitle: {type: String, required: true},
picturedesc: {type: String, required: true},
pictureupload: {type: String, required: false}
}, {collection:'picture'});



module.exports = mongoose.model('Picture', pictureSchema);