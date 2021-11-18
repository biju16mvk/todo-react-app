import React, { useState } from 'react';

import ToDoList from './components/ToDo/ToDoList/ToDoList';
import ToDoInput from './components/ToDo/ToDoInput/ToDoInput';
import './App.css';

const App = () => {
  const [toDo, setToDo] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addToDoHandler = enteredText => {
    setToDo(prevToDos => {
      const updatedToDos = [...prevToDos];
      updatedToDos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedToDos;
    });
  };

  const deleteItemHandler = todoId => {
    setToDo(prevToDos => {
      const updatedToDos = prevToDos.filter(todo => todo.id !== todoId);
      return updatedToDos;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No todos found. Maybe add one?</p>
  );

  if (toDo.length > 0) {
    content = (
      <ToDoList items={toDo} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="todo-form">
        <ToDoInput onAddToDo={addToDoHandler} />
      </section>
      <section id="todos">
        {content}
      </section>
    </div>
  );
};

export default App;
