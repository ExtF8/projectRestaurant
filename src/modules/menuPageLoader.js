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

export default function menuPageLoader() {
    const mainContent = document.querySelector('#main-content');
    const section = createSection('id', 'menu-1005');
    console.log(section);
    mainContent.appendChild(section);
}
