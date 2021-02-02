//validate the submitted form
const clearOutput = () => {
    //delete old image
    const oldImg = document.querySelector('img');
    if (oldImg != null) {
        oldImg.remove();
    }
    //clear the div below the input field for the most recent country 
    document.getElementById('count').innerHTML = '';
    document.getElementById('forcast').innerHTML = '';

    const high = document.querySelector('#high > h5');
    const des = document.querySelector('#des > h5');
    if (high != null) {
        high.remove();
    }
    if (des != null) {
        des.remove();
    }
}

const setupDate = () => {
    const date = document.getElementById('ddate');
    const today = new Date();
    //set minimum date to today
    date.min = today.toISOString().split('T')[0];
    console.log(date.min);
    //set maximum date to 16 days from now
    const max = new Date(today.setDate(today.getDate() + 16));
    date.max = max.toISOString().split('T')[0];
    console.log(date.max);

    const rdate = document.getElementById('rdate');
    //set maximum date to the same value of departure field
    rdate.max = date.max;
}

const returnDate = (e) => {

}

export {
    clearOutput,
    returnDate,
    setupDate
}