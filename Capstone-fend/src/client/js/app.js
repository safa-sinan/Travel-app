
/* Global Variables */
let ddateIndex = 0; //count/index for departure date 

function performAction(){
    const city = document.getElementById('city').value;
    //const country = document.getElementById('country').value;
    Client.clearOutput();
    postData('http://localhost:8000/addLocation', { city: city /*, country: country*/ })
        .then(
            function (Data) {
                ddateIndex = Client.calcCountDown(); //forcaset date index 
           return postData('http://localhost:8000/addWeather', { lng: Data.lng, lat: Data.lat, index: ddateIndex })
            })
       .then( function () {
          return postData('http://localhost:8000/addPic', { city: city })
          
        })
        .then( res => {
            updateUI();
         })
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
        alert("Could not get resutls,Please check your input");
        // appropriately handle the error
    }
}

const updateUI = async () => {
    const request = await fetch('http://localhost:8000/getData');
    try {
        const allData = await request.json();
        
        //add image for city
        Client.updateImage(allData.url);
        const duration = Client.tripDuration();
        //update most recent entry (count days, and weather info)
        document.getElementById('count').innerHTML = `${allData.city}, ${allData.country} is ${ddateIndex} days away Duration is ${duration} days`;
        document.getElementById('forcast').innerHTML = `Typical weather for then is:`
        
        const h31 = document.createElement('h5');
        h31.innerHTML = `High: ${allData.high}, Low: ${allData.low}`;
        document.getElementById('high').appendChild(h31);

        const h32 = document.createElement('h5');
        h32.innerHTML = `${allData.des}`;
        document.getElementById('des').appendChild(h32);
       

    } catch (error) {
        console.log("error", error);
        alert("Could not update output. Call me to fix")
    }
}
export{
    performAction
}