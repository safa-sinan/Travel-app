import { performAction} from './js/app'
import { updateImage, calcCountDown } from './js/img'
import { setupDate, clearOutput, returnDate} from './js/form'
import './styles/base.scss'
import './styles/media.scss'
//import './styles/footer.scss'
//import './styles/form.scss'
//import './styles/header.scss'
console.log("setup date!!");
setupDate();


export {
    performAction,
    updateImage,
    clearOutput,
    returnDate,
    setupDate,
    calcCountDown
   }
