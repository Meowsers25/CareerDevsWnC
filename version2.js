//functions

// function sayHiTo(person) { //(person) is parameter
//   console.log('Hi ' + person);  
// }
// sayHiTo('Katie'); //('Katie') is argument

var todos = ['item 1', ' item 2', ' item 3'];

function displayTodos() {
    console.log('My todos: ' + todos);
}
//displayTodos();

// function addTodo() {
//     todos.push('new todo');
// }
// addTodo();
// displayTodos();

// addTodo();
// displayTodos();

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
addTodo(' Hello There!');

function changeTodo(position, newValue) {
    todos[position] = newValue; 
    displayTodos();
}
changeTodo(0, 'changed');

function deleteTodo (position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0);