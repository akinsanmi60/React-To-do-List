import React from 'react';
//import components
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
    return(
        <section className="todo-container">
        <h2>To-Do</h2>

        <div className="todo-lists">
            {todos.map((todo) => (
                <Todo   text={todo.text} 
                        key={todo.id} 
                         
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}/>
            ))}
        </div>

    </section>
    )
}

export default TodoList


/* todo={todo}
    todos={todos}
    setTodos={setTodos} 
    
    are pass as props to todo list*/
