import './styles/global.css'
import './styles/main.css'

const element = document.getElementById('content');

const element1 = document.createElement('div');
const element2 = document.createElement('div');
const element3 = document.createElement('div');
const element4 = document.createElement('div');
const body = document.getElementsByTagName('body')


element2.classList.add('content');

element1.innerText = 'test1';
element2.innerText = 'test2';
element3.innerText = 'test3';
element4.innerText = 'test4';

const array = [element1, element2, element3, element4];

for (let i = 0; i < array.length; i++) {
    element.appendChild(array[i]);
}

element2.classList.add('title-text')
element1.classList.add('header-title')
element3.classList.add('card-group-item')
body.classList.add('body')
