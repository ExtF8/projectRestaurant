import './styles/global.css';
import './styles/main.css';
import './styles/dark.css';

import darkModeToggler from './modules/darkMode';
import mobileNavigationToggling from './modules/mobileNavigation';

import homePageLoader from './modules/homePageLoader.js';

import homePageLeft from './assets/img/homePageLeft.png';
import homePageRight from './assets/img/homePageRight.png';

import burger from './assets/img/menu/bisonBurger.png';
import chicken from './assets/img/menu/chickenSaladMango.png';
import lasagna from './assets/img/menu/lasagna.png';
import pizza from './assets/img/menu/meatLoversPizza.png';
import sauce from './assets/img/menu/pricklyPearPorkSauce.png';
import tostada from './assets/img/menu/purpleCornTostada.png';

darkModeToggler();
mobileNavigationToggling();

// Set globals
let pageNames = ['home', 'menu', 'contacts'];
let currentTab = pageNames[0];
let mainContent = document.getElementById('#main-content');

// Initial home page load
// loadMain(currentTab, content, reviews, homeTitle, info);

homePageLoader()
// Set click events for tab navigation
pageNames.forEach((pageName) => {
    const button = document.getElementById(pageName);
    button.addEventListener('click', () => {
        currentTab = changeButtonCover(currentTab, button.id);

        if (button.id == 'home') {
            console.log('home');
            homePageLoader()
            //   loadMain(button.id, content, reviews, homeTitle, info);
        } else if (button.id == 'menu') {
            console.log('menu');

            //   loadMain(button.id, content, menu, menuTitle);
        } else {
            console.log('contacts');

            //   loadMain(button.id, content, contacts, contactTitle);
        }
    });
});

function changeButtonCover(oldTab, newTab) {
    let hide = document.getElementById(`${newTab}`);
    let show = document.getElementById(`${oldTab}`);

    hide.classList.add('cs-active');
    show.classList.remove('cs-active');

    return newTab;
}
