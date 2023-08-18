import React from "react";

function InputDiv({ addTodo }) {
  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" />
      <button
        onClick={() => addTodo(document.getElementById("todo-input").value)}
      >
        Add Todo
      </button>
      <h2>Instructions</h2>
    </div>
  );
}

export default InputDiv;
