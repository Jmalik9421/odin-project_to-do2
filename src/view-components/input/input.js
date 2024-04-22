import './input.css';

export default class Input {
    constructor() {
        this.row = document.createElement('div');
        this.input = document.createElement('input');
        this.addBtn = document.createElement('button');
    }

    renderInput() {
        this.renderRow();
        this.renderInputBox();
        this.renderAddBtn();

        return this.input.value;
    };
    renderRow() {
        const todoApp = document.querySelector('.todo-app');

        this.row.classList.add('row');

        todoApp.appendChild(this.row);
    };
    renderInputBox() {
        this.input.type = 'text';
        this.input.id = 'input-box';
        this.input.placeholder = 'Groceries...';

        this.row.appendChild(this.input);
    };
    renderAddBtn() {
        this.addBtn.id = 'add-btn';
        this.addBtn.textContent = 'Add';

        this.row.appendChild(this.addBtn);
    };

    getTask() {
        return this.input.value;
    };

    clear() {
        this.input.value = '';
    };
};