//validate the submitted form
const validateForm = () => {
    //3)get count down days 
    //3)clear the div below the input field for the most recent country including the image
}

const setupDate = () => {
    const date = document.getElementById('ddate');
    //set minimum date to today
    date.min = new Date();
    //set maximum date to 16 days from now
    //date.max= new Date() + 16;

}
export {
    validateForm,
    setupDate
}