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

import { menuContents } from './menuContent.js';

export default function menuPageLoader() {
    const mainContent = document.querySelector('#main-content');
    const section = createSection('id', 'menu-1005');

    mainContent.appendChild(section);

    const container = createDiv('class', 'cs-container');
    section.appendChild(container);

    const content = createDiv('class', 'cs-content');
    container.appendChild(content);

    const title = createTitle(
        'class',
        'cs-title',
        menuContents[0].content.title
    );
    const paragraph = createParagraph(
        'class',
        'cs-text',
        menuContents[0].content.paragraph
    );

    content.appendChild(title);
    content.appendChild(paragraph);

    const cardGroupContent = renderCardGroup();

    container.appendChild(cardGroupContent);

    const reserveButton = document.createElement('a');
    reserveButton.innerText = 'Reserve Your Table'
    reserveButton.setAttribute('href', '');
    reserveButton.setAttribute('class', 'cs-button-solid');

    container.appendChild(reserveButton);
}

function renderCardGroup() {
    const list = createList(
        'class',
        'cs-card-group',
        menuContents[0].cardGroup,
        (itemData) =>
            createListItem('class', 'cs-item', itemData, renderListItemContent)
    );

    return list;
}

function renderListItemContent(itemData) {
    const fragment = document.createDocumentFragment();
    const picture = createPicture('class', 'cs-picture', itemData.picture);

    const info = createDiv('class', 'cs-info');

    const h3 = document.createElement('h3');
    info.appendChild(h3);

    const paragraph = createParagraph(
        'class',
        'cs-item-p',
        itemData.info.itemParagraph
    );

    const textSpan = createSpan('class', 'cs-name', itemData.info.name);
    const numberSpan = createSpan('class', 'cs-price', itemData.info.price);

    h3.setAttribute('class', 'cs-h3');
    h3.appendChild(textSpan);
    h3.appendChild(numberSpan);
    info.appendChild(paragraph);

    fragment.appendChild(picture);
    fragment.appendChild(info);

    return fragment;
}
