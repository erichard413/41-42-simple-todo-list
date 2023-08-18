import React from "react";
import "./styles.css";

function Todo({ todo, handleChecked, removeTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox={todo.isComplete ? "checked" : ""}
          onChange={() => handleChecked(todo.id)}
        />
        <span data-list-item-text>{todo.task}</span>
      </label>
      <button data-button-delete onClick={() => removeTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default Todo;
