// Importing home contents data from homeContents module
import { homeContents } from './homeContents';

// Extracting the first item from home contents to use as home page content
const HOME_PAGE_CONTENTS = homeContents[0];

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
    const statsList = createStatsList(
        attributeName.class,
        'cs-stats',
        HOME_PAGE_CONTENTS.stats
    );

    contentLeft.appendChild(leftImage);
    contentLeft.appendChild(statsList);

    return contentLeft;
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

// Object mapping common attribute names to their respective string representations
const attributeName = { id: 'id', class: 'class' };

/**
 * Creates a section HTML element with specified attribute and value
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @returns {HTMLElement} - The created section element
 */
function createSection(attributeName, attributeValue) {
    const section = document.createElement('section');
    section.setAttribute(attributeName, attributeValue);
    return section;
}

/**
 * Creates a div HTML element with a specified attribute name and value
 * @param {object} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @returns {HTMLDivElement} - The created div element
 */
function createDiv(attributeName, attributeValue) {
    const div = document.createElement('div');
    div.setAttribute(attributeName, attributeValue);
    return div;
}

/**
 * Creates a picture element with provided attributes and sources
 * @param {object} attributeName - Name of the attribute
 * @param {string} attributeValue  - Value for the attribute
 * @param {object} imageSources - Object containing picture sources for different screen sizes
 * @returns {HTMLPictureElement} - The created picture element
 */
function createPicture(attributeName, attributeValue, imageSources) {
    const picture = document.createElement('picture');
    picture.setAttribute(attributeName, attributeValue);

    Object.keys(imageSources).forEach((key) => {
        if (key === 'img') {
            const img = document.createElement('img');
            setAttributes(img, imageSources[key]);
            picture.appendChild(img);
        } else {
            const source = document.createElement('source');
            setAttributes(source, imageSources[key]);
            picture.appendChild(source);
        }
    });

    return picture;
}

/**
 * Creates a list (ul) element with provided attributes and data
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @param {object} data - Data to populate the list with
 * @returns {HTMLUListElement} - Created unordered list element
 */
function createStatsList(attributeName, attributeValue, data) {
    const list = document.createElement('ul');
    list.setAttribute(attributeName, attributeValue);

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            list.appendChild(
                createStatItem(attributeName, 'cs-stat', data[key])
            );
        }
    }

    return list;
}

/**
 * Creates a list item (li) element for displaying a single stat
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @param {object} data - Statistic data containing number or text
 * @returns {HTMLLIElement} - The created list item
 */
function createStatItem(attributeName, attributeValue, data) {
    const listItem = document.createElement('li');
    listItem.setAttribute(attributeName, attributeValue);

    const numberSpan = createSpan(attributeName, 'cs-number', data.num);
    const textSpan = createSpan(attributeName, 'cs-desc', data.text);

    listItem.appendChild(numberSpan);
    listItem.appendChild(textSpan);

    return listItem;
}

/**
 * Creates a span element with a specified class and text content
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the span
 * @returns {HTMLElement} - The created span element
 */
function createSpan(attributeName, attributeValue, text) {
    const span = document.createElement('span');
    span.setAttribute(attributeName, attributeValue);
    span.innerText = text;

    return span;
}

/**
 * Creates a topper element (span) with a specified class and text content.
 * @param {string} attributeName - Name of the attribute (e.g., 'class').
 * @param {string} attributeValue - Value for the attribute.
 * @param {string} text - Text content for the topper.
 * @returns {HTMLElement} - The created topper element.
 */
function createTopper(attributeName, attributeValue, text) {
    const topper = document.createElement('span');
    topper.setAttribute(attributeName, attributeValue);
    topper.innerText = text;

    return topper;
}

/**
 * Creates a title element (h2) with a specified class and text content.
 * @param {string} attributeName - Name of the attribute (e.g., 'class').
 * @param {string} attributeValue - Value for the attribute.
 * @param {string} text - Text content for the title.
 * @returns {HTMLHeadingElement} - The created title element.
 */
function createTitle(attributeName, attributeValue, text) {
    const title = document.createElement('h2');
    title.setAttribute(attributeName, attributeValue);
    title.textContent = text;

    return title;
}

/**
 * Creates a paragraph element (p) with a specified class and text content.
 * @param {string} attributeName - Name of the attribute (e.g., 'class').
 * @param {string} attributeValue - Value for the attribute.
 * @param {string} text - Text content for the paragraph.
 * @returns {HTMLParagraphElement} - The created paragraph element.
 */
function createParagraph(attributeName, attributeValue, text) {
    const paragraph = document.createElement('p');
    paragraph.setAttribute(attributeName, attributeValue);
    paragraph.textContent = text;

    return paragraph;
}

/**
 * Sets multiple attributes on a DOM element based on a provided object.
 * @param {HTMLElement} element - The DOM element to set attributes on.
 * @param {object} attributes - Object containing key-value pairs for attributes.
 */
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}
