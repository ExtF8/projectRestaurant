// Importing home contents data from homeContents module
import { homeContents } from './homeContents';

import {
    createSection,
    createDiv,
    createPicture,
    createList,
    createListItem,
    createSpan,
    createTopper,
    createTitle,
    createParagraph,
} from './elementRender.js';

// Extracting the first item from home contents to use as home page content
const HOME_PAGE_CONTENTS = homeContents[0];

// Object mapping common attribute names to their respective string representations
const attributeName = { id: 'id', class: 'class' };

/**
 * Loads and displays the home page content
 */
export default function homePageLoader() {
    // Select the main content area in the DOM
    const mainContent = document.querySelector('#main-content');

    // Create and append the main section and content div
    const section = createSection(attributeName.id, 'home-content-container');
    const homeContent = createDiv(attributeName.class, 'home-content');
    mainContent.appendChild(section);
    section.appendChild(homeContent);

    // Create and append left and right content sections
    const contentLeft = createContentLeft();
    const contentRight = createContentRight();
    homeContent.appendChild(contentLeft);
    homeContent.appendChild(contentRight);
}

/**
 * Creates the left section of the home page content including image and stats
 * @returns {HTMLElement}
 */
function createContentLeft() {
    const contentLeft = createDiv(attributeName.class, 'home-content-left');
    const leftImage = createPicture(
        attributeName.class,
        'cs-picture cs-picture-left',
        HOME_PAGE_CONTENTS.imageLeft
    );
    const statsList = createList(
        attributeName.class,
        'cs-stats',
        HOME_PAGE_CONTENTS.stats,
        (stat) =>
            createListItem(
                attributeName.class,
                'cs-stat',
                stat,
                renderStatContent
            )
    );

    contentLeft.appendChild(leftImage);
    contentLeft.appendChild(statsList);

    return contentLeft;
}

/**
 * Renders the content of a statistics item for display in a list item.
 * This function creates and returns a document fragment containing the stat's number and description.
 * @param {object} stat - The statistics data item, expected to have 'num' and 'text' properties.
 * @returns {DocumentFragment} - The document fragment containing the rendered content.
 */
function renderStatContent(stat) {
    const fragment = document.createDocumentFragment();

    const numberSpan = createSpan(attributeName.class, 'cs-number', stat.num);
    const textSpan = createSpan(attributeName.class, 'cs-desc', stat.text);

    fragment.appendChild(numberSpan);
    fragment.appendChild(textSpan);

    return fragment;
}

/**
 * Creates the right section of the home page content including topper, title, paragraph, and image.
 * @returns {HTMLElement} - The created right content section.
 */
function createContentRight() {
    const contentRight = createDiv(attributeName.class, 'home-content-right');
    const topper = createTopper(
        attributeName.class,
        'cs-topper',
        HOME_PAGE_CONTENTS.content.topper
    );
    const title = createTitle(
        attributeName.class,
        'cs-title',
        HOME_PAGE_CONTENTS.content.title
    );
    const paragraph = createParagraph(
        attributeName.class,
        'cs-text',
        HOME_PAGE_CONTENTS.content.paragraph
    );
    const rightImage = createPicture(
        attributeName.class,
        'cs-picture cs-picture-right',
        HOME_PAGE_CONTENTS.imageRight
    );

    contentRight.appendChild(topper);
    contentRight.appendChild(title);
    contentRight.appendChild(paragraph);
    contentRight.appendChild(rightImage);

    return contentRight;
}
