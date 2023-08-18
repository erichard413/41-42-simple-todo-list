import { useState } from "react";
import "./styles.css";
import Todo from "./todo";
import InputDiv from "./inputDiv";

function App() {
  const initialTodo = [];
  const [todos, setTodos] = useState(initialTodo);

  const handleChecked = idx => {
    let todosCopy = [...todos];
    todosCopy[idx].isComplete = !todos[idx].isComplete;
    setTodos(todosCopy);
  };

  const addTodo = todo => {
    setTodos([...todos, { id: todos.length, task: todo, isComplete: false }]);
  };

  const removeTodo = idx => {
    let todosCopy = [...todos];
    setTodos(todosCopy.filter(todo => todo.id !== idx));
  };

  return (
    <div className="App">
      <ul id="list">
        {todos.map(task => (
          <Todo
            todo={task}
            handleChecked={handleChecked}
            removeTodo={removeTodo}
            key={task.id}
          />
        ))}
      </ul>
      <InputDiv addTodo={addTodo} />
      <ol>
        <li>
          Add the ability to add todos with an input and a button which adds the
          todo when clicked. These todos should show up in a list above the
          input. You can use a form for this if you want, but there are some
          quirks with forms in React that we cover later in the course so it is
          probably best just to not use a form for now.
        </li>
        <li>
          Add the ability to mark a todo as complete by clicking on the checkbox
          or label for the todo.
        </li>
        <li>
          Add a delete button next to each todo item in the list which will
          remove the todo when clicked.
        </li>
        <li>
          BONUS: The easiest way to create this project is to just put all the
          HTML/data into one single component. This works fine for this project
          since it is so small, but with larger projects is not ideal. The bonus
          for this project is to break up your project so that each todo item in
          the list is rendered as a separate component from your `App.jsx`
          component.
        </li>
      </ol>
    </div>
  );
}

export default App;
