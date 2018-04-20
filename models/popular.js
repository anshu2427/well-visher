var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var popularSchema = new Schema({
pvideotitle: {type: String, required: true},
pvideourl: {type: String, required: true},
pvideodescription: {type: String, required: false},
pvideocreatedby: {type: String, required: true},
pvideoupload: {type: String, required: true}
}, {collection:'popularVideo'});



module.exports = mongoose.model('Popular', popularSchema);