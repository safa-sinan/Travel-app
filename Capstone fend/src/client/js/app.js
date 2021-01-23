/* Global Variables */
const apiKey = 'a71dc3603fd9454a31db2a619c3eff4c&units=imperial&lang=en';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);
function performAction(e) {
    const zipCode = document.getElementById('zip').value;
    getWeatherData(baseUrl, zipCode, apiKey)
    .then(
        function (Data) {
            console.log(Data)
            const feelings = document.getElementById('feelings').value;
            postData('/addData', { temperature: Data.main.temp, date: newDate, userResponse: feelings })
            .then(
                updateUI()
            )
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
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = allData.date;
      document.getElementById('temp').innerHTML = allData.temperature;
      document.getElementById('content').innerHTML = allData.userResponse;
  
    }catch(error){
      console.log("error", error);
    }
  }