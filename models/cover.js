var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var coverSchema = new Schema({
covervideotitle: {type: String, required: true},
covervideourl: {type: String, required: true},
covervideoupload: {type: String, required: false}
}, {collection:'coverCollection'});



module.exports = mongoose.model('Cover', coverSchema);