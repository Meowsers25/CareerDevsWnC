// Loops of Logic

// i = 0 Initialization
// i < 3 Condition
//increase i +1 Final- expression

// for (var i = 0; i < 3; i++) {
//     console.log('hey');
// }

var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
          console.log('My todos: ');
          for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
             console.log('(x)' + this.todos[i].todoText);  
          } else {
              console.log('( )' + this.todos[i].todoText);  
          }
          }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        //this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};


todoList.addTodo('first');
todoList.addTodo('second');
todoList.toggleCompleted(1);