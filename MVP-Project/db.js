const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database')
});

// var videoSchema = mongoose.Schema({
//   video_
// })






module.exports = db
