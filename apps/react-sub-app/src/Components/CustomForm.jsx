import React from 'react';
import { CustomButton } from 'ui';

const CustomForm = ({ addTask, userInput, setUserInput }) => {

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <CustomButton label='Submit'/>
        </form>
    );
};

export default CustomForm;