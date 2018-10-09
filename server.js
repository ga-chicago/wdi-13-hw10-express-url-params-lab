// DEPENDENCIES
const express = require('express');
const app = express();
const MarsMissions = require('./models/missions')

// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page

// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/', (req, res) => {
  res.send('MISSIONS!')
})

app.get('/missions', (req, res) => {
  res.render('index.ejs', {
    marsMissions: MarsMissions
  })
})
// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
app.get('/missions/:index', (req, res) => {
  res.render('show.ejs', {
    mission: MarsMissions[req.params.index]
  })
})


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
