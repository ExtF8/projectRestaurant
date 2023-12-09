import { homeContents } from './homeContents';

const HOME_PAGE_CONTENTS = homeContents[0];

const attributeName = { id: 'id', class: 'class' };

/**
 * Main function to load the content of home page
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
 * Creates a new section element with the given ID
 * @param {string} id - The ID to set for new element
 * @returns {HTMLElement} - The section element
 */

function createSection(attributeName, attributeValue) {
    const section = document.createElement('section');
    section.setAttribute(attributeName, attributeValue);
    return section;
}

/**
 * Creates a new div element with given attribute name and value
 * @param {object} attributeName
 * @param {string} attributeValue
 * @returns {HTMLDivElement}
 */
function createDiv(attributeName, attributeValue) {
    const div = document.createElement('div');
    div.setAttribute(attributeName, attributeValue);
    return div;
}

/**
 * Creates the left content section with image and stats
 * @returns element
 */
function createContentLeft() {
    const contentLeft = createDiv(attributeName.class, 'home-content-left');
    const leftImage = createImage(
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
 * Creates a picture element bases on provided attributes and sources
 * @param {object} attributeName - The attribute name
 * @param {string} attributeValue  - The attribute value
 * @param {object} imageSources - Image sources for different screen sizes
 * @returns {HTMLPictureElement}
 */
function createImage(attributeName, attributeValue, imageSources) {
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
 * Creates a unordered list element containing data
 * @param {string} className
 * @param {object} data
 * @returns {HTMLUListElement}
 */

/**
 * Creates a unordered list element from attribute name and value containing data
 * @param {object} attributeName
 * @param {string} attributeValue
 * @param {object} data
 * @returns {HTMLUListElement}
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
 * Creates a list item for a single stat
 * @param {object} data - Statistic data containing number or text
 * @returns {HTMLLIElement}
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
 * Creates a span element with class name and text
 * @param {string} className - The class name for the span
 * @param {string} text - The text content for the span
 * @returns element
 */
function createSpan(attributeName, attributeValue, text) {
    const span = document.createElement('span');
    span.setAttribute(attributeName, attributeValue);
    span.innerText = text;

    return span;
}

/**
 * Creates the right content with topper, title, paragraph and image
 * @returns element
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
    const rightImage = createImage(
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

/**
 * Creates a topper element with given class name
 * @param {string} className - The class name for the topper
 * @returns element
 */
function createTopper(attributeName, attributeValue, text) {
    const topper = document.createElement('span');
    topper.setAttribute(attributeName, attributeValue);
    topper.innerText = text;

    return topper;
}

/**
 * Creates a title element h2 with given class name
 * @param {string} className - The class name for the title
 * @param {string} text - The text content for the title
 * @returns {HTMLHeadingElement}
 */
function createTitle(attributeName, attributeValue, text) {
    const title = document.createElement('h2');
    title.setAttribute(attributeName, attributeValue);
    title.textContent = text;

    return title;
}

/**
 * Creates a paragraph element with given class name
 * @param {string} className - The class name for the paragraph
 * @returns element
 */
function createParagraph(attributeName, attributeValue, text) {
    const paragraph = document.createElement('p');
    paragraph.setAttribute(attributeName, attributeValue);
    paragraph.textContent = text;

    return paragraph;
}

/**
 * Helper function to set up multiple attributes
 * @param {HTMLElement} element - The DOM element to set attributes on
 * @param {object} attributes - An object containing key-value pairs
 */
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}
