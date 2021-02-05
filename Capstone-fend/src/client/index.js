import { performAction } from './js/app'
import { updateImage, calcCountDown } from './js/img'
import { setupDate, clearOutput, returnDate, tripDuration } from './js/form'
import './styles/base.scss'
import './styles/media.scss'

document.addEventListener('DOMContentLoaded', () => {
    //event listeners here
    document.getElementById('remove').addEventListener('click', clearOutput);
    document.getElementById('add').addEventListener('submit', performAction);
    document.getElementById('add').addEventListener('click', performAction);
    document.getElementById('ddate').addEventListener('change', returnDate);
});
//console.log("setup date!!");
setupDate();


export {
    performAction,
    updateImage,
    clearOutput,
    returnDate,
    setupDate,
    calcCountDown,
    tripDuration,
}
