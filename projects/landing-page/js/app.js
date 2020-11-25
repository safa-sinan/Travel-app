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
function setNavbarMenu(){
    //get all sections in the document
    const sections = document.body.getElementsByTagName('section');

    //intialize navbar
    navbarMenu = [];

    //set navbarMenu new values
    for (const item of sections) {
        navbarMenu.push(item.getAttribute('data-nav'));
    }
}
function resetNavbar(){
    const navbar = document.getElementById('navbar__list');
    while (navbar.firstChild) {
        element.removeChild(enavbar.firstChild);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavbar()
{
    setNavbarMenu();
   // resetNavbar();

    //modify nav element contents
    const navbar = document.getElementById('navbar__list');
    for (const item of navbarMenu) {
        const newElement = document.createElement('li');
        newElement.textContent = item;

        navbar.appendChild(newElement);
    }


}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


