import './assets/style.css';
import Input from './view-components/input/input.js';
import List from './view-components/list/list.js';

const input = new Input;
const list = new List;

input.test();
list.test();

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#add-btn');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        
        let span = document.createElement('span');
        span.textContent = '\u00d7'
        
        li.appendChild(span)
        listContainer.appendChild(li);

        inputBox.value = '';

        saveData();
    }
};
addBtn.addEventListener('click', addTask);

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
};

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();