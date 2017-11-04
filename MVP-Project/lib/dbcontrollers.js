const mongoose= require('mongoose')
const model = require('../model/video.js');
const db = require('../db.js');
const axios = require('axios');

  exports.saveData = (video)=>{
    var newVid = new Video({
      username: 'bob',
      thumbnail: 'String',
      video_url: 'https://www.youtube.com/watch?v=CAMWdvo71ls',
      title: 'Tout Les Memes',
      desc: 'Awesome',
    }, {timestamps:true});

    newVid.save(function(err){
      if(err){
        console.log('error', err)
      }
      console.log('saved to database')
    })
  }

  exports.getData = (username) =>{
    newVid.find({username: username})
  }
