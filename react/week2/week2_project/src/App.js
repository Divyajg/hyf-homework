import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import './App.css'
//Given array.
const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];
// child component-1
const TodoTitle = (props) => {
  return <h1 className="title"> {props.title} </h1>;
};
//child component-2
const TodoList = (props) => {
  return (
    <ol>
      {props.todoItems.map((todo) => {
        return (
          <RenderItem
            key={todo.id}
            todoId={todo.id}
            todoExplained={todo.description}
            delete={props.delete}
          />
        );
      })}
    </ol>
  );
};
//child component-3
const RenderItem = (props) => {
  const [check, setCheck] = useState(false);
  const isDone = () => setCheck(!check);
  return (
    <div className="listItems">
      <li
        key={props.id}
        style={{ textDecorationLine: check ? "line-through" : "none" }}>
        {props.todoExplained} 
        <input type="checkbox" onClick={isDone} />
        <button className="button_delete" onClick={()=>props.delete(props.todoId)} > Delete </button>
      </li>
    </div>
  );
};
//child component-4(Timer)
const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <div>
      <p>
        You have used <span className="time">{time}</span> seconds on this website
      </p>
    </div>
  );
};
//Parent function.
function App() {
  const [useTodos, setTodos] = useState(todos);
  const nextTodo = { id: nanoid(), description: "Random text" };
  let newTodos = useTodos.concat(nextTodo);
  const buttonAddTodo = () => setTodos(newTodos);
  const deleteTodo = (id) => setTodos(useTodos.filter((todo)=>todo.id!==id));
  return (
    <div className="App">
        <TodoTitle title="Todo List" />
        <Timer />
        <button className="button_add" onClick={buttonAddTodo}> add todo </button>
        {(useTodos.length===0 && <h3>No items</h3>)}
        <TodoList todoItems={useTodos} delete={deleteTodo} />
    </div>
  );
}
export default App;