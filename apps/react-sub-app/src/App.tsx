import React from 'react';
import './App.css';
import CustomForm from './Components/CustomForm';

function App(props) {
  return (
    <div className="App">
      <CustomForm {...props}/>
    </div>
  );
}

export default App;
