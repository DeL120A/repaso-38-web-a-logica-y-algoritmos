const addButton = document.querySelector('#add-button');
const todoInput = document.querySelector('#todo-input');

const todo = [];

function clikHandler(event) {
    event.preventDefault();
    const todoText = todoInput.value;
    if(todoText === ''){
        alert('Por favor ingresa un to do');
        return;
    }
    console.log(todoText);
    todos.push(todoText)
    console.log(todo)
}

addButton.addEventListener('click', clikHandler);
