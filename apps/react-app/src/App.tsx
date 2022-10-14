import React, { useState } from 'react';
import ToDoList from "./Components/ToDoList";
import ToDoForm from 'react-sub-app';
import {Button} from 'ui'

function App() {
  
  const [ toDoList, setToDoList ] = useState([{
    "id": 1,
    "task": "Go to Store",
    "complete": true
  }]);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  return (
    <div className="App">
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <Button />
      <ToDoForm />
    </div>
  );
}

export default App;
