import { homeContents } from './homeContents';

// Home page content loader
export default function homePageLoader() {
    // Get main content element id
    const mainContent = document.querySelector('#main-content');
    const section = createSection('home-content-container');
    const homeContent = createDiv('home-content');
    const contentLeft = createContentLeft();
    const contentRight = createContentRight();

    // Fill left section with content
    section.appendChild(homeContent);
    homeContent.appendChild(contentLeft);
    homeContent.appendChild(contentRight);
    mainContent.appendChild(section);
}

// Create section
function createSection(id) {
    const section = document.createElement('section');
    section.setAttribute('id', id);
    return section;
}

function createDiv(className) {
    const div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

function createContentLeft() {
    const contentLeft = createDiv('home-content-left');
    const leftImage = createImage(
        'cs-picture cs-picture-left',
        homeContents[0].imageLeft
    );
    const statsList = createStatsList();

    contentLeft.appendChild(leftImage);
    contentLeft.appendChild(statsList);

    return contentLeft;
}

// Create Image
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

// Create stats list under left image
function createStatsList() {
    const list = document.createElement('ul');
    list.setAttribute('class', 'cs-stats');

    for (let key in homeContents[0].stats) {
        if (homeContents[0].stats.hasOwnProperty(key)) {
            list.appendChild(createStatItem(homeContents[0].stats[key]));
        }
    }

    return list;
}

function createStatItem(stat) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'cs-stat');

    const numberSpan = createSpan('cs-number', stat.num);
    const textSpan = createSpan('cs-desc', stat.text);

    listItem.appendChild(numberSpan);
    listItem.appendChild(textSpan);

    return listItem;
}

function createSpan(className, text) {
    const span = document.createElement('span');
    span.setAttribute('class', className);
    span.innerText = text;

    return span;
}

// Fill right section with content
function createContentRight() {
    const contentRight = createDiv('home-content-right');
    const topper = createTopper('cs-topper');
    const title = createTitle('cs-title');
    const paragraph = createParagraph('cs-text');
    const rightImage = createImage(
        'cs-picture cs-picture-right',
        homeContents[0].imageRight
    );

    contentRight.appendChild(topper);
    contentRight.appendChild(title);
    contentRight.appendChild(paragraph);
    contentRight.appendChild(rightImage);

    return contentRight;
}

function createTopper(className) {
    const topper = document.createElement('span');
    topper.setAttribute('class', className);
    topper.innerText = homeContents[0].content.topper;

    return topper;
}

function createTitle(className) {
    const title = document.createElement('h2');
    title.setAttribute('class', className);
    title.textContent = homeContents[0].content.title;

    return title;
}

function createParagraph(className) {
    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', className);
    paragraph.textContent = homeContents[0].content.paragraph;

    return paragraph;
}

// helper function for setting multiple attributes
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}
