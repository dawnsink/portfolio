const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const config = require('./config');

const PORT = config.PORT;
const mongoose = require('mongoose');
const sign = require('./models/sign');


mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to the database');
});


// Handle data in a nice way
app.use(express.json());
const publicURL = path.resolve(`${__dirname}/public`);

// Set your static server
app.use(express.static(publicURL));

// Set your static html file
app.get("/", (req, res) => {
  res.sendFile( path.resolve(__dirname + "/views/index.html"))
});


// ---- ADD YOUR API ENDPOINTS HERE ----
// GET: "api/v1/astros"
app.get("/api/v1/signs", async (req, res) => {
    try{
      const data = await sign.find();
      res.json(data)
    } catch(error){
      console.error(error);
      res.json(error);
    }
  });
  
  
// Start listening
app.listen(PORT, () => {
  console.log(`see the magic: http://localhost:${PORT}`);
})

// "start": "node index.js",