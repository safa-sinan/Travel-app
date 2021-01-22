var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();
const app = express()

app.use(express.static('dist'))

const cors = require('cors');
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());


console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/submit', async function (req, res) {
    //fetch api call url 
    const url = req.body.url;
    const apiCall = await fetch(process.env.API_ID + 'key=' + process.env.API_KEY + '&lang=en' + '&url=' + url);
    const data = await apiCall.json();
    res.send(data);
})
