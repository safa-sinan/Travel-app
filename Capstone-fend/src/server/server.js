var path = require('path');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const geoNames = 'http://api.geonames.org/postalCodeSearchJSON?';
const weatherBit = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const pixabay = 'https://pixabay.com/api/?';
// Setup empty JS object to act as endpoint for all routes
let projectData = {};
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
//app.use(express.static('website'));

dotenv.config();
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// Setup Server
const server = app.listen(port, listening);
function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

app.get('/getData', (req, res) => {
    console.log("getdata", projectData);
    res.send(projectData);
});

//geoname api call
app.post('/addLocation', async (req, res) => {
    const body = req.body;
    
    const response = await fetch( process.env.GEONAME + 'placename=' + body.city + '&country=' + body.country + '&maxRows=10&username=' + process.env.GN_USER);
    try { 
        const data = await response.json();
        //console.log("data", data);
        projectData = {
            lng : data.postalCodes[0].lng,
            lat : data.postalCodes[0].lat,
            country: data.postalCodes[0].countryCode
        }
        res.send(projectData);
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
    console.log('addLocation end');
});

//pixabay api call
app.post('/addPic', async (req, res) => {
    const response = await fetch( process.env.PIXABAY + '&key='+ process.env.P_KEY +'&q='+ req.body.city +'&image_type=photo');
    try {
        const data = await response.json();
    
        projectData = { ...projectData,
            url : data.hits[0].webformatURL
        }
        res.send(projectData);
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
    console.log("projectData", projectData);
    console.log('addPic end');
});

app.post('/addWeather', async (req, res) => {
    const body = req.body;
    const index = req.body.index; //departure date
    
    const response = await fetch( process.env.WEATHER + '&lat='+ body.lat +'&lon='+ body.lng + '&key='+ process.env.WB_KEY );
    try {
        const data = await response.json();
        //console.log("data", data);
        projectData = { ...projectData,
            low : data.data[index].low_temp,
            high : data.data[index].high_temp,
            des: data.data[index].weather.description
        }
        //console.log("projectData", projectData);
        res.send(projectData);
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
    console.log('addWeather end');
});