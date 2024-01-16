import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function TodoSingleApp() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      task: item,
    };

    console.log(newTodo.id);

    setTodos([...todos, newTodo]);

    setItem("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="...enter your todo item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <div>
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoSingleApp;
