/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let navbarMenu; /* array of navigation list*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*
* @description populates array which is  used to create navigation links 
*/
function setNavbarMenu() {
    //get all sections in the document
    const sections = document.body.getElementsByTagName('section');

    //intialize navbar
    navbarMenu = [];

    //set navbarMenu new values
    for (const item of sections) {
        navbarMenu.push({
            id: item.id,
            nav: item.getAttribute('data-nav')
        });
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
/*
* @description called when window is ready. builds the nav menu
*/
function createNavbar() {
    setNavbarMenu();

    // Build menu 
    const navbar = document.getElementById('navbar__list');
    const fragment = document.createDocumentFragment(); 
    for (const index in navbarMenu) {

        const newElement = document.createElement('li');
        newElement.innerHTML = `<a href="#${navbarMenu[index].id}" class="menu__link">${navbarMenu[index].nav}</a>`;

        fragment.appendChild(newElement);
    }

    // Scroll to anchor ID using scrollTO event
    navbar.appendChild(fragment);
    navbar.addEventListener('click', respondToTheClick);
}
/**
 * End Main Functions
 * Begin Events
 *
*/
// Scroll to section on link click
/*
* @description called when link is clicked. adds active class to selected section
* modify the scroll behaviour to be smooth
*/
function respondToTheClick(evt) {
    if (evt.target.nodeName === 'A') {
        evt.preventDefault();
        // new scroll behaviour when link is clicked
        const currSelect = document.body.querySelector(`${evt.target.hash}`);
        currSelect.scrollIntoView({ behavior: 'smooth', block: 'end' });

    }
}
/*
* @description change active class 
*/
function onScroll() {
    //get all sections in the document
    const sections = document.querySelectorAll("section");

    //remove previous active state
    const prevSelect = document.body.querySelector('.your-active-class');
    prevSelect.className =
    prevSelect.className.replace('your-active-class', '');

    for(let sec of sections){

        if (sec.getBoundingClientRect().top  >= 0){

            setTimeout(function () {
                sec.className += 'your-active-class';
            },0);
            break;
        }
    }
    
}