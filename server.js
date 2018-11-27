// DEPENDENCIES
const express = require('express');
const app = express();

const MarsMissions = require('./models/missions');

// * Your mission is to complete the app
// * The app will need routes for index and show

//INDEX
app.get('/missions', (req, res) => {
  res.render('../views/index.ejs', {
    marsMissions: MarsMissions
  })
});

//SHOW
app.get('/missions/:id', (req, res) => {
  res.render('../views/show.ejs', {
    marsMissions: MarsMissions[req.param.id]
  })
});


// PORT
const port = 3000;


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
