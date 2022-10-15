import React, { useState } from 'react';
import ToDoList from "./Components/ToDoList";
import ToDoForm from 'react-sub-app';
import { AppBar, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

function App() {
  
  const [ toDoList, setToDoList ] = useState([{
    "id": 1,
    "task": "Go to Store",
    "complete": false
  },{
    "id": 2,
    "task": "Do Laundry",
    "complete": false
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

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <AppBar position="static" sx={{height: '70px', background: 'rgba(255, 255, 255, 0.7)'}}>
      <Typography sx={{ fontSize: 36, color: 'black', padding: '10px'}}> To-do Application </Typography>
      </AppBar>
      <Card variant="outlined" sx={{ width: '600px', margin: '100px 0 0 500px' }}>
      <CardHeader title={<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
      To-Do List
      </Typography>}/>
      <Divider/>
      <CardContent>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <Divider sx={{ margin: '30px 0 30px 0' }}/>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
      Add Task
      </Typography>
      <ToDoForm addTask={addTask}/>
      </CardContent>
      </Card>
    </div>
  );
}

export default App;
