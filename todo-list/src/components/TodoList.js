import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function TodoList({ task }) {
  return (
    <div>
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faEdit} />
      </div>
    </div>
  );
}

export default TodoList;
