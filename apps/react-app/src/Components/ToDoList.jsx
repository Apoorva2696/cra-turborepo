import React from 'react';
import { CustomButton } from 'ui';
import ToDo from './ToDo';
 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
   return (
       <div>
           {toDoList.map((todo,index) => {
               return (
                   <ToDo key={todo.id + index} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
               )
           })}
           <CustomButton style={{margin: '20px'}} onClick={handleFilter} label='Clear Completed'/>
       </div>
   );
};
 
export default ToDoList;