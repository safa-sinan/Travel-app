//validate the submitted form
const validateForm = () => {
    //3)get count down days 
    //3)clear the div below the input field for the most recent country including the image
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

export {
    validateForm,
    setupDate
}