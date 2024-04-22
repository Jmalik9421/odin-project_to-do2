import './assets/style.css';
import TodoIcon from './assets/imgs/todo.png';
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
title.appendChild(todoIcon);

const input = new Input;
const list = new List;

input.renderInput();
list.renderListContainer();

input.addBtn.addEventListener('click', () => {
    const task = input.getTask();
    list.addTask(task);
    input.clear();
    saveData()
});
list.listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    };
});

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

function saveData() {
    localStorage.setItem('data', list.listContainer.innerHTML);
};

list.renderTask();