// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 8000;

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const cors = require('cors');
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port, listening);
function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

app.get('/getData', (req, res) => {
    res.send(projectData);
    console.log(projectData);
});
app.post('/addData', (req, res) => {
    const body = req.body;
    
    projectData = {
        temperature : body.temperature,
        date : body.date,
        userResponse: body.userResponse
    }
    console.log(projectData);
});
