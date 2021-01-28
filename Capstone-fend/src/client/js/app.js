/* Global Variables */
let ddateIndex = 1; //count/index for departure date 
// Create a new date instance dynamically with JS
//let d = new Date();
//let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);
function performAction(e) {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;;
    postData('/addLocation', { city: city, country: country })
        // getWeatherData(baseUrl, zipCode, apiKey)
        .then(
            function (Data) {
                console.log(Data);
                //const date = document.getElementById('ddate').value;
                postData('/addWeather', { lng: Data.lng, lat: Data.lat , index: ddateIndex})
                  /*  .then(
                        function (Data) {
                            postData('/addPic', { lng: Data.lng, lat: Data.lat })
                        })*/
                   // .then(
                      //  updateUI()
                    //)
            })
}

const getWeatherData = async (baseURL, zip, key) => {

    const res = await fetch(baseURL + 'zip=' + zip + '&appid=' + key)
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

const postData = async (url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

const updateUI = async () => {
    const request = await fetch('/getData');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = allData.lng;
        document.getElementById('temp').innerHTML = allData.lat;
        //country code
        document.getElementById('content').innerHTML = allData.country;

    } catch (error) {
        console.log("error", error);
    }
}