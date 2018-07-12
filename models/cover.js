var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var coverSchema = new Schema({
coverphototitle: {type: String, required: true},
coverphotourl: {type: String, required: true},
coverphotoupload: {type: String, required: false}
}, {collection:'coverCollection'});



module.exports = mongoose.model('Cover', coverSchema);