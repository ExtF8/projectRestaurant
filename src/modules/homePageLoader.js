import { homeContents } from './homeContents';

const HOME_PAGE_CONTENTS = homeContents[0];

/**
 * Main function to load the content of home page
 */
export default function homePageLoader() {
    // Select the main content area in the DOM
    const mainContent = document.querySelector('#main-content');

    // Create and append the main section and content div
    const section = createSection('home-content-container');
    const homeContent = createDiv('home-content');
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
 * @returns element
 */
function createSection(id) {
    const section = document.createElement('section');
    section.setAttribute('id', id);
    return section;
}

/**
 * Creates a new div element with given class name
 * @param {string} className - Class name to set for new div element
 * @returns element
 */
function createDiv(className) {
    const div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

/**
 * Creates the left content section with image and stats
 * @returns element
 */
function createContentLeft() {
    const contentLeft = createDiv('home-content-left');
    const leftImage = createImage(
        'cs-picture cs-picture-left',
        HOME_PAGE_CONTENTS.imageLeft
    );
    const statsList = createStatsList();

    contentLeft.appendChild(leftImage);
    contentLeft.appendChild(statsList);

    return contentLeft;
}

/**
 * Creates a picture element based on provided sources
 * @param {string} classNames - The class names for the picture element
 * @param {object} imageSources  - Image sources for different screen sizes
 * @returns element
 */
function createImage(classNames, imageSources) {
    const picture = document.createElement('picture');
    picture.setAttribute('class', classNames);

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
 * Creates a list element containing stats
 * @returns element
 */
function createStatsList() {
    const list = document.createElement('ul');
    list.setAttribute('class', 'cs-stats');

    for (let key in HOME_PAGE_CONTENTS.stats) {
        if (HOME_PAGE_CONTENTS.stats.hasOwnProperty(key)) {
            list.appendChild(createStatItem(HOME_PAGE_CONTENTS.stats[key]));
        }
    }

    return list;
}

/**
 * Creates a list item for a single stat
 * @param {object} stat - Statistic data containing number and text
 * @returns element
 */
function createStatItem(stat) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'cs-stat');

    const numberSpan = createSpan('cs-number', stat.num);
    const textSpan = createSpan('cs-desc', stat.text);

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
function createSpan(className, text) {
    const span = document.createElement('span');
    span.setAttribute('class', className);
    span.innerText = text;

    return span;
}

/**
 * Creates the right content with topper, title, paragraph and image
 * @returns element
 */
function createContentRight() {
    const contentRight = createDiv('home-content-right');
    const topper = createTopper('cs-topper');
    const title = createTitle('cs-title');
    const paragraph = createParagraph('cs-text');
    const rightImage = createImage(
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
function createTopper(className) {
    const topper = document.createElement('span');
    topper.setAttribute('class', className);
    topper.innerText = HOME_PAGE_CONTENTS.content.topper;

    return topper;
}

/**
 * Creates a title element with given class name
 * @param {string} className - The class name for the title
 * @returns element
 */
function createTitle(className) {
    const title = document.createElement('h2');
    title.setAttribute('class', className);
    title.textContent = HOME_PAGE_CONTENTS.content.title;

    return title;
}

/**
 * Creates a paragraph element with given class name
 * @param {string} className - The class name for the paragraph
 * @returns element
 */
function createParagraph(className) {
    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', className);
    paragraph.textContent = HOME_PAGE_CONTENTS.content.paragraph;

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
