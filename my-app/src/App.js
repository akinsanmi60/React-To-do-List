import React, {useState} from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/To-do-List';



function App() {
  //With this hook, we get data from the input 
   const [inputText, setInputText] = useState('');
  //With this hook, we store our todo data
   const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
       <header >
        <h1>TO-DO List</h1>
        <i className="icon fas fa-book-open"></i>
        </header>
        <Form  todos={todos} setTodos={setTodos} inputText={inputText} setInputText={ setInputText} />
        <TodoList todos={todos} setInputText={ setInputText} setTodos={setTodos} />
    </div>
  );
}

export default App;

/*the  setInputText will be pass down as props to form and in the form it will be use to update
 the inputTextHandler function in the From.js in which the  inputTextHandler function will be
pass as props to the onChange event in the input */