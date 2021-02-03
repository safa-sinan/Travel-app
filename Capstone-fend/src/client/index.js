import { performAction} from './js/app'
import { updateImage, calcCountDown } from './js/img'
import { setupDate, clearOutput, returnDate, tripDuration} from './js/form'
import './styles/base.scss'
import './styles/media.scss'
console.log("setup date!!");
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
