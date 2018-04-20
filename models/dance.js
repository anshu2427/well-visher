var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var danceSchema = new Schema({
dvideotitle: {type: String, required: true},
dvideourl: {type: String, required: true},
dvideodescription: {type: String, required: true},
dvideocreatedby: {type: String, required: true},
dvideoupload: {type: String, required: false}
}, {collection:'danceVideo'});



module.exports = mongoose.model('Dance', danceSchema);