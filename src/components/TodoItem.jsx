import React from "react";
import "../index.css";
import { Button } from "@mui/material";

const TodoItem = ({
  id,
  title,
  deleteItem,
  edit,
  editTodo,
  value,
  setValue,
  saveEditTodo,
}) => {
  const updateDeleteItem = () => {
    deleteItem(id);
  };
  const editTodoTitle = () => {
    editTodo(id);
    setValue(title);
  };

  return (
    <>
      <li className="todo">
        <label>
          <input type="checkbox" />
          {edit === id ? (
            <div>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />{" "}
            </div>
          ) : (
            <span>{title}</span>
          )}
          {edit === id ? (
            <div>
              {" "}
              <Button
                variant="outlined"
                onClick={() => {
                  saveEditTodo(id);
                }}
              >
                Save
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="outlined" onClick={updateDeleteItem}>
                Delete
              </Button>
              <Button variant="outlined" onClick={editTodoTitle}>
                Edit
              </Button>
            </div>
          )}
        </label>
      </li>
    </>
  );
};

export default TodoItem;
