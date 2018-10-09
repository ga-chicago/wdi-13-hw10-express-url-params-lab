// DEPENDENCIES
const express = require('express');
const app = express();

const MarsMissions = require('./models/missions');

// * Your mission is to complete the app
// * The app will need routes for index and show

//Index route - missions
app.get('/missions', (req, res) => {
  res.send(MarsMissions);
});

//show route - missions
app.get('/missions/:id', (req, res) => {
  res.render('show.ejs', {
    marsMissions: MarsMissions[req.param.id]
  })
});
// * The app will need views for index and show

// app.set('views', '');
// app.get('/:id', (req, res) => {

// });
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)


// PORT
const port = 3000;



// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
