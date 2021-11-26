import React, { useState, useEffect } from "react";
import "./App.css";
import ProjectTitle from "./projectTitle";
import TodoList from "./todoList";
import Form from "./Form";
import Timer from "./timer";
import TitleBorder from "./TitleBorder";

function App() {
  const [useTodos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const url =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  async function fetchingData() {
    const result = await fetch(url);
    const todos = await result.json();
    setTodos(todos);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchingData();
  }, []);

  const handleDelete = (id) =>
    setTodos(useTodos.filter((todo) => todo.id !== id));

  return (
    <div className="App">
      <div>
        <TitleBorder>
          <ProjectTitle title="Todo List" />
        </TitleBorder>
        <Timer />
        <Form useTodos={useTodos} setTodos={setTodos} />
        {useTodos.length === 0 && <h3>No items</h3>}
        <div>
          {isLoading ? (
            "Loading..."
          ) : (
            <TodoList todoItems={useTodos} delete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
