const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  var videoSchema = mongoose.Schema({
    username: String,
    thumbnail: String,
    video_url: String,
    title: String,
    desc: String,
  }, {timestamps:true});


  var Video = mongoose.model('video', videoSchema);

  module.exports = Video;
