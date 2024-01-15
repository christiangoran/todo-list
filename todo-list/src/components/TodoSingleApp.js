import React from "react";
import { useState } from "react";

function TodoSingleApp() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, { id: Math.floor(Math.random() * 1000), task: item }]);
    console.log(todos.map((todo) => todo.task));

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
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoSingleApp;
