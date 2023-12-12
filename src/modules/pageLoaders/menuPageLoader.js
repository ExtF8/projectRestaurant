// Importing menu contents data form menuContents module
import { menuContents } from '../pageData/menuContent.js';

// Importing utility functions from the 'elementRenderer' module. These functions are used
// for creating various HTML elements dynamically
import {
    createSection,
    createDiv,
    createPicture,
    createList,
    createListItem,
    createSpan,
    createTitle,
    createParagraph,
    clearPage,
    changeButtonCover,
} from '../utility/elementRender.js';

// Extracting the first item from menu contents to use as menu page content
const MENU_PAGE_CONTENTS = menuContents[0];

/**
 * Main function to load and display the menu page content
 * @param {HTMLElement} content - The parent element where the menu page will be rendered
 */
export default function menuPageLoader(content) {
    clearPage(content);

    // Select the main content area of the DOM
    const mainContent = content;

    // Create a section for the menu and append it to the main content
    const section = createSection('id', 'menu-1005');
    mainContent.appendChild(section);

    // Render the container that holds the menu's content and append it to the section
    const container = renderContainer();
    section.appendChild(container);
}

/**
 * Renders the primary container for the menu page
 * @returns {HTMLDivElement} - The container div element
 */
function renderContainer() {
    const container = createDiv('class', 'cs-container');
    const content = renderContent();
    const cardGroupContent = renderCardGroup();
    const reserveButton = createReserveButton();

    container.appendChild(content);
    container.appendChild(cardGroupContent);
    container.appendChild(reserveButton);

    return container;
}

/**
 * Renders the content section with title and paragraph
 * @returns {HTMLDivElement} - The content section div element
 */
function renderContent() {
    const content = createDiv('class', 'cs-content');
    const title = createTitle(
        'class',
        'cs-title',
        MENU_PAGE_CONTENTS.content.title
    );
    const paragraph = createParagraph(
        'class',
        'cs-text',
        MENU_PAGE_CONTENTS.content.paragraph
    );
    content.appendChild(title);
    content.appendChild(paragraph);

    return content;
}

/**
 * Renders a group of cards representing menu items
 * @returns {HTMLUListElement} - The card group list element
 */
function renderCardGroup() {
    const list = createList(
        'class',
        'cs-card-group',
        MENU_PAGE_CONTENTS.cardGroup,
        (itemData) =>
            createListItem('class', 'cs-item', itemData, renderListItemContent)
    );

    return list;
}

/**
 * Renders the content for an individual list item in the card group
 * @param {object} itemData - Data for a single menu item
 * @returns {DocumentFragment} - The fragment containing the list item content
 */
function renderListItemContent(itemData) {
    // Create a document fragment to hold the item content
    const fragment = document.createDocumentFragment();
    const picture = createPicture('class', 'cs-picture', itemData.picture);
    const infoContainer = renderInfoContainer(itemData);

    picture.setAttribute('area-hidden', 'true');
    fragment.appendChild(picture);
    fragment.appendChild(infoContainer);

    return fragment;
}

/**
 * Renders the information container for a menu item
 * @param {object} itemData - Data for a single menu item
 * @returns {HTMLDivElement} - The info container div element
 */
function renderInfoContainer(itemData) {
    const info = createDiv('class', 'cs-info');
    const headingContainer = renderHeadingContainer(itemData);
    const paragraph = createParagraph(
        'class',
        'cs-item-p',
        itemData.info.itemParagraph
    );

    info.appendChild(headingContainer);
    info.appendChild(paragraph);

    return info;
}

/**
 * Renders the heading container for a menu item
 * @param {object} itemData - Data for a single menu item
 * @returns {HTMLHeadingElement} - The heading container element
 */
function renderHeadingContainer(itemData) {
    const headingContainer = document.createElement('h3');
    const textSpan = createSpan('class', 'cs-name', itemData.info.name);
    const numberSpan = createSpan('class', 'cs-price', itemData.info.price);

    headingContainer.setAttribute('class', 'cs-h3');
    headingContainer.appendChild(textSpan);
    headingContainer.appendChild(numberSpan);

    return headingContainer;
}

/**
 * Creates a button for reserving a table, navigating to contacts page
 * @returns {HTMLAnchorElement} - The reserve button element
 */
function createReserveButton() {
    const reserveButton = document.createElement('a');

    const target = document.body.querySelector('#main-content');

    reserveButton.innerText = 'Reserve Your Table';
    reserveButton.setAttribute('href', '#');
    reserveButton.setAttribute('class', 'cs-button-solid');

    reserveButton.addEventListener('click', (event) => {
        event.preventDefault();
        contactsPageLoader(target);
        changeButtonCover('menu', 'contacts')
    });

    return reserveButton;
}
