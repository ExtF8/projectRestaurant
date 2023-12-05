const element = document.getElementById('content');

const element1 = document.createElement('div');
const element2 = document.createElement('div');
const element3 = document.createElement('div');
const element4 = document.createElement('div');

element2.classList.add('testClass');

element1.innerText = 'test1';
element2.innerText = 'test2';
element3.innerText = 'test3';
element4.innerText = 'test4';

const array = [element1, element2, element3, element4];

for (let i = 0; i < array.length; i++) {
    element.appendChild(array[i]);
}

element4.classList.add('firstTestClass')
