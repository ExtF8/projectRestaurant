import { homeContents } from './homeContents';

// Home page content loader
export default function homePageLoader(type) {
    // Get main content element id
    let mainContent = document.querySelector('#main-content');

    // Create section
    let section = document.createElement('section');
    section.setAttribute('id', 'home-content-container');
    mainContent.appendChild(section);

    let homeContent = document.createElement('div');
    homeContent.setAttribute('class', 'home-content');
    section.appendChild(homeContent);

    // Fill left section with content
    let contentLeft = document.createElement('div');
    contentLeft.setAttribute('class', 'home-content-left');
    homeContent.appendChild(contentLeft);

    let leftImage = document.createElement('picture');
    leftImage.setAttribute('class', 'cs-picture');
    leftImage.classList.add('cs-picture-left');
    contentLeft.appendChild(leftImage);

    let mobileSourceLeft = document.createElement('source');
    let tabletSourceLeft = document.createElement('source');
    let imgLeft = document.createElement('img');

    leftImage.appendChild(mobileSourceLeft);
    leftImage.appendChild(tabletSourceLeft);
    leftImage.appendChild(imgLeft);

    setAttributes(mobileSourceLeft, homeContents[0].imageLeft.mobileImage);
    setAttributes(tabletSourceLeft, homeContents[0].imageLeft.tabletImage);
    setAttributes(imgLeft, homeContents[0].imageLeft.img);

    // Element under left image
    let list = document.createElement('ul');

    contentLeft.appendChild(list);
    list.setAttribute('class', 'cs-stats');

    (function firstStatContainer() {
        let listItem = document.createElement('li');
        listItem.setAttribute('class', 'cs-stat');

        let firstSpan = document.createElement('span');
        let secondSpan = document.createElement('span');

        let firstStat = listItem;

        firstStat.appendChild(firstSpan);
        firstSpan.setAttribute('class', 'cs-number');
        firstSpan.innerText = homeContents[0].stats.firstStat.num;

        firstStat.appendChild(secondSpan);
        secondSpan.setAttribute('class', 'cs-desc');
        secondSpan.innerText = homeContents[0].stats.firstStat.text;
        list.appendChild(listItem);

        return firstStatContainer;
    })();

    (function secondStatContainer() {
        let listItem = document.createElement('li');
        listItem.setAttribute('class', 'cs-stat');

        let firstSpan = document.createElement('span');
        let secondSpan = document.createElement('span');

        list.appendChild(listItem);
        let secondStat = listItem;

        secondStat.appendChild(firstSpan);
        firstSpan.setAttribute('class', 'cs-number');
        firstSpan.innerText = homeContents[0].stats.secondStat.num;

        secondStat.appendChild(secondSpan);
        secondSpan.setAttribute('class', 'cs-desc');
        secondSpan.innerText = homeContents[0].stats.secondStat.text;

        return secondStatContainer;
    })();

    (function thirdStatContainer() {
        let listItem = document.createElement('li');
        listItem.setAttribute('class', 'cs-stat');
        let firstSpan = document.createElement('span');
        let secondSpan = document.createElement('span');

        list.appendChild(listItem);
        let thirdStat = listItem;

        thirdStat.appendChild(firstSpan);
        firstSpan.setAttribute('class', 'cs-number');
        firstSpan.innerText = homeContents[0].stats.thirdStat.num;

        thirdStat.appendChild(secondSpan);
        secondSpan.setAttribute('class', 'cs-desc');
        secondSpan.innerText = homeContents[0].stats.thirdStat.text;

        return thirdStatContainer;
    })();

    // Fill right section with content
    let contentRight = document.createElement('div');
    contentRight.setAttribute('class', 'home-content-right');
    homeContent.appendChild(contentRight);

    let topper = document.createElement('span');
    topper.setAttribute('class', 'cs-topper');
    topper.innerText = homeContents[0].content.topper;
    contentRight.appendChild(topper);

    let h2 = document.createElement('h2');
    h2.classList.add('cs-title');
    h2.textContent = homeContents[0].content.title;
    contentRight.appendChild(h2);

    let paragraph = document.createElement('p');
    paragraph.classList.add('cs-text');
    paragraph.textContent = homeContents[0].content.paragraph;
    contentRight.appendChild(paragraph);

    let rightImage = document.createElement('picture');
    rightImage.setAttribute('class', 'cs-picture');
    rightImage.classList.add('cs-picture-right');
    contentRight.appendChild(rightImage);

    let mobileSourceRight = document.createElement('source');
    let tabletSourceRight = document.createElement('source');
    let imgRight = document.createElement('img');
    rightImage.appendChild(mobileSourceRight);
    rightImage.appendChild(tabletSourceRight);
    rightImage.appendChild(imgRight);

    setAttributes(mobileSourceRight, homeContents[0].imageRight.mobileImage);
    setAttributes(tabletSourceRight, homeContents[0].imageRight.tabletImage);
    setAttributes(imgRight, homeContents[0].imageRight.img);
}

// helper function for setting attributes
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}
