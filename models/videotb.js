var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var videotbSchema = new Schema({

video_title: {type: String, required: true},
video_description: {type: String, required: true},
video_link: {type: String, required: true},
video_brief: {type: String, required: true},
video_author: {type: String, required: true},
video_screenphoto: {type: String, required: true},
video_uniqueId: {type: String, required: true},
video_tag: {type: String, required: true},
video_time : { type : Date, default: Date.now}


});



module.exports =mongoose.model('Videotb', videotbSchema);


/* 
Indexes

MongoDB supports secondary indexes. With mongoose, we define these indexes within our Schema at the path level or the schema level. Defining indexes at the schema level is necessary when creating compound indexes.

  var animalSchema = new Schema({
    name: String,
    type: String,
    tags: { type: [String], index: true } // field level
  });

  animalSchema.index({ name: 1, type: -1 }); // schema level

When your application starts up, Mongoose automatically calls createIndex for each defined index in your schema. Mongoose will call createIndex for each index sequentially, and emit an 'index' event on the model when all the createIndex calls succeeded or when there was an error. While nice for development, it is recommended this behavior be disabled in production since index creation can cause a significant performance impact. Disable the behavior by setting the autoIndex option of your schema to false, or globally on the connection by setting the option autoIndex to false.

  mongoose.connect('mongodb://user:pass@localhost:port/database', { autoIndex: false });
  // or
  mongoose.createConnection('mongodb://user:pass@localhost:port/database', { autoIndex: false });
  // or
  animalSchema.set('autoIndex', false);
  // or
  new Schema({..}, { autoIndex: false });

Mongoose will emit an index event on the model when indexes are done building or an error occurred.

  // Will cause an error because mongodb has an _id index by default that
  // is not sparse
  animalSchema.index({ _id: 1 }, { sparse: true });
  var Animal = mongoose.model('Animal', animalSchema);

  Animal.on('index', function(error) {
    // "_id index cannot be sparse"
    console.log(error.message);
  });

See also the Model#ensureIndexes method.

*/