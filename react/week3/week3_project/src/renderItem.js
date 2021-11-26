import React, { useState } from "react";
import PropTypes from "prop-types";

const RenderItem = (props) => {
  const { todoId, todoExplained, todoDeadline } = props;
  const [check, setCheck] = useState(false);
  const [useTodo, setUpdatedTodo] = useState(todoExplained);
  const [input, setInput] = useState(false);
  const isDone = () => setCheck(!check);
  const [edit, setEdit] = useState(true);

  const updateInputState = () => {
    setInput(!input);
    setEdit(!edit);
  };

  return (
    <div className="listItems">
      <li
        key={todoId}
        style={{ textDecorationLine: check ? "line-through" : "none" }}
      >
        {input ? (
          <input
            type="text"
            checked={check}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
        ) : (
          useTodo
        )}{" "}
        | {todoDeadline}
        <input type="checkbox" onClick={isDone} />
        <button className="button_delete" onClick={() => props.delete(todoId)}>
          {" "}
          Delete{" "}
        </button>
        <button
          className="button_edit"
          onClick={updateInputState}
          style={{ color: edit ? "red" : "green" }}
        >
          {" "}
          {edit ? "Edit" : "Update"}{" "}
        </button>
      </li>
    </div>
  );
};

RenderItem.propTypes = {
  todoExplained: PropTypes.string.isRequired,
  todoDeadline: PropTypes.instanceOf(new Date()).isRequired,
};
export default RenderItem;
