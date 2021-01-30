import { performAction} from './js/app'
import { updateImage, calcCountDown } from './js/img'
import { setupDate, validateForm} from './js/form'
import './styles/style.scss'
//import './styles/base.scss'
//import './styles/footer.scss'
//import './styles/form.scss'
//import './styles/header.scss'
console.log("setup date!!");
setupDate();


export {
    performAction,
    updateImage,
    validateForm,
    setupDate,
    calcCountDown
   }
