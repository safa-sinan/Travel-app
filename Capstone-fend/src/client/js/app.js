
/* Global Variables */
let ddateIndex = 0; //count/index for departure date 

function performAction(e) {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    console.log('Add location');
    postData('http://localhost:8000/addLocation', { city: city, country: country })
        .then(
            function (Data) {
                ddateIndex = Client.calcCountDown(); //forcaset date index 
                console.log(ddateIndex);
                console.log('Add weather');
                postData('http://localhost:8000/addWeather', { lng: Data.lng, lat: Data.lat, index: ddateIndex })
            })
        .then(function (Data) {
            console.log('Add pic');
            postData('http://localhost:8000/addPic', { city: city })
        })
        .then(function (Data) {
            console.log('update UI');
            updateUI()
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
    const request = await fetch('http://localhost:8000/getData');
    try {
        const allData = await request.json();
        console.log("data", allData);
        //add image for city
        Client.updateImage(allData.url);
        //update most recent entry (count days, and weather info)
        document.getElementById('count').innerHTML = `${allData.city}, ${allData.country} is ${ddateIndex} days away`;
        document.getElementById('forcast').innerHTML = `Typical weather for then is:`
        document.getElementById("high").innerHTML = `High: ${allData.high}, Low: ${allData.low}`;
        document.getElementById("des").innerHTML = `${allData.des}`;
       
        //country code

    } catch (error) {
        console.log("error", error);
    }
}
export{
    performAction
}