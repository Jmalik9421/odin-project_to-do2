import './input.css';

export default class Input {
    renderInput() {
        const row = this.renderRow();
        this.renderInputBox(row);
        this.renderAddBtn(row);
    };
    renderRow() {
        const todoApp = document.querySelector('.todo-app');

        const row = document.createElement('div');
        row.classList.add('row');

        todoApp.appendChild(row);

        return row;
    };
    renderInputBox(row) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'input-box';
        input.placeholder = 'Groceries...';

        row.appendChild(input);
    };
    renderAddBtn(row) {
        const addBtn = document.createElement('button');
        addBtn.id = 'add-btn';
        addBtn.textContent = 'Add';

        row.appendChild(addBtn);
    };
};