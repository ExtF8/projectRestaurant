import { menuContents } from './menuContent.js';

import {
    createSection,
    createDiv,
    createPicture,
    createList,
    createListItem,
    createSpan,
    createTitle,
    createParagraph,
} from './elementRender.js';

const MENU_PAGE_CONTENTS = menuContents[0];

export default function menuPageLoader() {
    const mainContent = document.querySelector('#main-content');

    const section = createSection('id', 'menu-1005');
    mainContent.appendChild(section);

    const container = renderContainer();
    section.appendChild(container);
}

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

function renderListItemContent(itemData) {
    const fragment = document.createDocumentFragment();
    const picture = createPicture('class', 'cs-picture', itemData.picture);
    const infoContainer = renderInfoContainer(itemData);

    picture.setAttribute('area-hidden', 'true');
    fragment.appendChild(picture);
    fragment.appendChild(infoContainer);

    return fragment;
}

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

function renderHeadingContainer(itemData) {
    const headingContainer = document.createElement('h3');
    const textSpan = createSpan('class', 'cs-name', itemData.info.name);
    const numberSpan = createSpan('class', 'cs-price', itemData.info.price);

    headingContainer.setAttribute('class', 'cs-h3');
    headingContainer.appendChild(textSpan);
    headingContainer.appendChild(numberSpan);

    return headingContainer;
}

function createReserveButton() {
    const reserveButton = document.createElement('a');

    reserveButton.innerText = 'Reserve Your Table';
    reserveButton.setAttribute('href', '');
    reserveButton.setAttribute('class', 'cs-button-solid');

    return reserveButton;
}
