import React from "react";
import { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addItem(input);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="...add an item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
