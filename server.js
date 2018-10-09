// DEPENDENCIES
const express = require('express');
const app = express();

const Missions = require('./models/marsMissions')
// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;


// app.get('./models/fil', (req, res)=>{
//   res.send('fil is pretty coo')
// })






// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"
app.get('/models/', (req, res)=>{
  res.render('index.ejs', {
    Curiosity: Missions[0].name,
    Opportunity: Missions[1].name,
    Spirit: Missions[2].name,
    Sojourner: Missions[3].name,
    Rosetta: Missions[4].name
  })
})

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission

app.get('/models/:index', (req, res)=>{
  console.log(req.params);
    res.render('show.ejs', {
      mission: Missions[req.params.index]
  });
});


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
