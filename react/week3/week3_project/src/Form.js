import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Form({ useTodos, setTodos }) {
  const [inputTodo, setInputTodo] = useState("");
  const [inputDate, setInputDate] = useState("");

  const buttonAddTodo = () => {
    const nextTodo = {
      id: nanoid(),
      description: inputTodo,
      deadline: inputDate,
    };
    let newTodos = useTodos.concat(nextTodo);
    if (inputTodo && inputDate) setTodos(newTodos);
  };
  return (
    <div>
      <label>
        Todo Description:{" "}
        <input
          onChange={(e) => setInputTodo(e.target.value)}
          className="addMargin"
          type="text"
          placeholder="New Todo"
        />{" "}
      </label>{" "}
      <br />
      <label>
        Deadline:{" "}
        <input
          onChange={(e) => setInputDate(e.target.value)}
          className="addMargin"
          type="date"
        />{" "}
      </label>
      <br />
      <button className="button_add" onClick={buttonAddTodo}>
        {" "}
        Add Todo{" "}
      </button>
    </div>
  );
}
