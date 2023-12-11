// Importing global, main, and dark mode CSS stylesheets
import './styles/global.css';
import './styles/main.css';
import './styles/dark.css';

// Importing functionality modules
import darkModeToggler from './modules/darkMode';
import mobileNavigationToggling from './modules/mobileNavigation';

// Importing page loader functions
import homePageLoader from './modules/homePageLoader.js';
import menuPageLoader from './modules/menuPageLoader.js';

// Importing utility function for changing button appearance
import { changeButtonCover } from './modules/elementRender.js';

// Activate dark mode toggle functionality
darkModeToggler();

// Set up mobile navigation toggle functionality
mobileNavigationToggling();

// Global variables setup
let pageNames = ['home', 'menu', 'contacts'];
let currentTab = pageNames[0];
let content = document.querySelector('#main-content');

// Load the initial home page content
homePageLoader(content);

/**
 * Set up click event listeners for tab navigation in the header.
 * This allows switching between different pages (home, menu, contacts) and
 * ensures the appropriate content is loaded and displayed.
 */
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
