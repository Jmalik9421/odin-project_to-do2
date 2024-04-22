import './assets/style.css';
import CheckedIcon from './assets/imgs/checked.png';
import UncheckedIcon from './assets/imgs/unchecked.png';
import Input from './view-components/input/input.js';
import List from './view-components/list/list.js';

const container = document.createElement('div');
container.classList.add('container');

const todoApp = document.createElement('div');
todoApp.classList.add('todo-app');

const title = document.createElement('h2');
title.textContent = 'To-do List';

document.body.appendChild(container);
container.appendChild(todoApp);
todoApp.appendChild(title);

const input = new Input;
const list = new List;

input.renderInput();
list.renderListContainer();

input.addBtn.addEventListener('click', () => {
    const task = input.getTask();
    list.addTask(task);
    input.clear();
});
list.listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    };
});
// input.deleteBtn.addEventListener('click', list.addTask(input.returnProject()));
// list.li.addEventListener('click', list.toggleCheck());
// list.deleteBtn.addEventListener('click', list.delete());

// !!! I AM HERE !!!
// - render input field and add its logic (btn click) in input component
// - render list of projects and its logic in list component
// - load the classes in this main.js file 
// - save data to and fetch data from local storage
// 

// const inputBox = document.querySelector('#input-box');
// const listContainer = document.querySelector('#list-container');
// const addBtn = document.querySelector('#add-btn');

// function addTask() {
//     if (inputBox.value === '') {
//         alert('You must write something!');
//     } else {
//         let li = document.createElement('li');
//         li.textContent = inputBox.value;
        
//         let span = document.createElement('span');
//         span.textContent = '\u00d7'
        
//         li.appendChild(span)
//         listContainer.appendChild(li);

//         inputBox.value = '';

//         saveData();
//     }
// };
// addBtn.addEventListener('click', addTask);

// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('checked');
//         saveData();
//     } else if (e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//         saveData();
//     }
// });

// function saveData() {
//     localStorage.setItem('data', listContainer.innerHTML);
// };

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem('data');
// }

// showTask();