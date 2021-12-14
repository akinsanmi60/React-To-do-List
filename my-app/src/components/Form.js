import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {
    // this function update the useState hook in the App.js
    const inputTextHandler = (e) => {
        //getting the value of the input
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() *1000} ])
        setInputText(''); // clearing the input after submitting
    }


    return(
        <form className="todo-form">
        <input type="text"  className="todo-input" placeholder="What's your plan?" onChange={inputTextHandler} value={inputText}/>
        <button type="submit" className="todo-submit" value="Add task" onClick={submitTodoHandler}>  
            <i className="fa fa-plus-square" aria-hidden="true"></i>
         </button>
    </form>

    );
}

export default Form;