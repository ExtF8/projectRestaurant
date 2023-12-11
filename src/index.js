import './styles/global.css';
import './styles/main.css';
import './styles/dark.css';

import darkModeToggler from './modules/darkMode';
import mobileNavigationToggling from './modules/mobileNavigation';

import homePageLoader from './modules/homePageLoader.js';
import menuPageLoader from './modules/menuPageLoader.js';
import { changeButtonCover } from './modules/elementRender.js';



darkModeToggler();
mobileNavigationToggling();

// Set globals
let pageNames = ['home', 'menu', 'contacts'];
let currentTab = pageNames[0];
let content = document.querySelector('#main-content');

// Initial home page load
homePageLoader(content);

// Set click events for tab navigation
pageNames.forEach((pageName) => {
    const button = document.getElementById(pageName);
    button.addEventListener('click', () => {
        currentTab = changeButtonCover(currentTab, button.id);

        if (button.id == 'home') {
            homePageLoader(content);
        } else if (button.id == 'menu') {
            menuPageLoader(content);
        } else {
            console.log('contacts');
        }
    });
});
