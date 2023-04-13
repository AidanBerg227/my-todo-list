document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newTask = todoInput.value.trim();

        if (newTask !== '') {
            addTask(newTask);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        } else if (event.target.classList.contains('todo-item') || event.target.classList.contains('todo-item-text')) {
            const listItem = event.target.classList.contains('todo-item-text') ? event.target.parentElement : event.target;
            listItem.classList.toggle('done');
        }
    });
    

    function addTask(task) {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
taskText.textContent = task;
taskText.classList.add('todo-item-text');
li.appendChild(taskText);

        li.classList.add('todo-item');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
