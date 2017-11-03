const express = require('express');
const path = require('path');
const parser = require('body-parser');
const request = require('request');
const db = require('../db.js');
const model = require('../model/video.js');
const dbfxns = require('../lib/dbcontrollers.js');

const app = express();

app.listen(3000, ()=>(console.log('listening on port 3000')));
app.use(express.static(path.resolve(__dirname, '../client/public')))
app.use(parser.urlencoded({extended:true}))
app.use(parser.json());


// //GET home page
// app.get('/', function(req, res){
//
//   res.json('got it');
// })


// POST from search at app
app.post('/', function(req, res){
  //server grabs body and send GET request to
  res.send('posted');
})
//GET request for saved playlist, server also GET req to database
app.get('/', function(req, res){

  res.json('got it');
})

app.delete('/playlist', function(req, res){

  res.send('got delete at playlist');
})
