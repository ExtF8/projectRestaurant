// Importing home contents data from contactsContents module
import { contactsContents } from '../pageData/contactsContent.js';

// Importing utility functions from the 'elementRender' module. These functions are used
// for creating various HTML elements dynamically
import {
    createSection,
    createDiv,
    createPicture,
    createList,
    createListItem,
    createSpan,
    clearPage,
    createLink,
    createTitle,
    createParagraph,
    createTopper,
} from '../utility/elementRender.js';

/**
 * Loads and displays the contacts page content
 * @param {HTMLElement} content - The parent element where the contacts page will be rendered
 */
export default function contactsPageLoader(content) {
    clearPage(content);

    // Create the main section for contacts and append it to the content area
    const section = createSection('id', 'contact-strip-324');
    content.appendChild(section);

    // Render and append the container for the contacts content
    const container = renderContainer();
    section.appendChild(container);

    // Create and append a list of contact cards to the container using data from contactsContents
    const cardGroup = contactsContents[0].cardGroup;
    const list = createList(
        'class',
        'cs-stat-group',
        Object.values(cardGroup),
        renderContactItem
    );
    container.appendChild(list);
}

/**
 * Renders the primary container for the contacts page
 * @returns {HTMLDivElement} - The container div element
 */
function renderContainer() {
    const container = createDiv('class', 'cs-container');

    // Render and append the content section with title and paragraph to the container
    const content = renderContent();
    container.appendChild(content);

    return container;
}

/**
 * Renders the content section with title, topper, and paragraph
 * @returns {HTMLDivElement} - The content section div element
 */
function renderContent() {
    const content = createDiv('class', 'cs-content');
    const title = createTitle(
        'class',
        'cs-title',
        contactsContents[0].contents.title
    );
    const topper = createTopper(
        'class',
        'cs-topper',
        contactsContents[0].contents.topper
    );
    const paragraph = createParagraph(
        'class',
        'cs-text',
        contactsContents[0].contents.paragraph
    );

    content.appendChild(topper);
    content.appendChild(title);
    content.appendChild(paragraph);

    return content;
}

/**
 * Renders an individual contact item as a list item
 * @param {object} itemData - Data for a single contact item
 * @returns {HTMLLIElement} - The list item element with contact information
 */
function renderContactItem(itemData) {
    const listItem = createListItem(
        'class',
        'cs-item',
        itemData,
        renderListItemContent
    );
    return listItem;
}

/**
 * Renders the content for a contact list item
 * @param {object} itemData - Data for a single contact item
 * @returns {DocumentFragment} - The fragment containing contact item content
 */
function renderListItemContent(itemData) {
    const fragment = document.createDocumentFragment();
    const picture = createPicture('class', 'cs-picture', itemData.picture);
    const infoContainer = createDiv('class', 'cs-flex-group');

    infoContainer.appendChild(
        createSpan('class', 'cs-header', itemData.info.header)
    );
    appendContactInfo(infoContainer, itemData.info);

    fragment.appendChild(picture);
    fragment.appendChild(infoContainer);

    return fragment;
}

/**
 * Appends specific contact details to a container based on the item type (phone, email, etc.)
 * @param {HTMLDivElement} container - The container to which additional info will be appended
 * @param {object} info - The specific contact information data
 */
function appendContactInfo(container, info) {
    // Logic to append various types of contact information
    if (info.phoneNrOne) {
        const phoneLinkOne = createLink(
            'href',
            info.href,
            'class',
            'cs-link',
            info.phoneNrOne
        );
        const phoneLinkTwo = createLink(
            'href',
            info.href,
            'class',
            'cs-link',
            info.phoneNrTwo
        );
        container.appendChild(phoneLinkOne);
        container.appendChild(phoneLinkTwo);
    } else if (info.email) {
        const emailLink = createLink(
            'href',
            `mailto:${info.email}`,
            'class',
            'cs-link',
            info.email
        );
        container.appendChild(emailLink);
    } else if (info.address) {
        const addressLink = createLink(
            'href',
            info.href,
            'class',
            'cs-link',
            info.address
        );
        container.appendChild(addressLink);
    } else if (info.days) {
        const daysSpan = createSpan('class', 'cs-hours', info.days);
        const hoursSpan = createSpan('class', 'cs-hours', info.hours);
        container.appendChild(daysSpan);
        container.appendChild(hoursSpan);
    }
}
