import './list.css';

export default class List {
    constructor() {
        this.listContainer = document.createElement('ul');
    };

    renderListContainer() {
        const todoApp = document.querySelector('.todo-app');

        this.listContainer.id = 'list-container';

        todoApp.appendChild(this.listContainer);
    };

    addTask(task) {
        const listItem = this.renderListItem(task);
        this.renderDeleteBtn(listItem);
    };
    renderListItem(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task

        this.listContainer.appendChild(listItem);

        return listItem;
    };
    renderDeleteBtn(listItem) {
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '\u00d7';

        listItem.appendChild(deleteBtn);
    };

    renderTask() {
        this.listContainer.innerHTML = localStorage.getItem('data');
    };
};