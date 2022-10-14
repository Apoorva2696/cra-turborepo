import React, { useState } from 'react';
import './App.css';
import CustomForm from './Components/CustomForm';

function App(props) {
  const [ userInput, setUserInput ] = useState('');
  return (
    <div className="App">
      <CustomForm {...props} userInput={userInput} setUserInput={setUserInput}/>
    </div>
  );
}

export default App;
