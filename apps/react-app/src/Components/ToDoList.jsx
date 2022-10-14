import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
   return (
       <div>
           {toDoList.map((todo,index) => {
               return (
                   <ToDo key={todo.id + index} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
       </div>
   );
};
 
export default ToDoList;