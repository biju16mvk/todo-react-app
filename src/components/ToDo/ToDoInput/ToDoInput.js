import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./ToDoInput.css";

const ToDoInput = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const toDoInputChangeHandler = event => {
    if (event.target.value.trim().length) {
      setIsValid(true);
      setEnteredValue(event.target.value);
    }
  };
 
  const formSubmitHandler = event => {
    event.preventDefault();
    if (!enteredValue.trim().length) {
      setIsValid(false);
      return;
    }
    props.onAddToDo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>To Do</label>
        <input
          type="text"
          onChange={toDoInputChangeHandler}
        />
      </div>
      <Button type="submit">Add To Do</Button>
    </form>
  );
};

export default ToDoInput;
