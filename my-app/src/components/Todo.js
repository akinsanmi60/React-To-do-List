import React from 'react'

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteButton = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const completeButton = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return{// the completed is a CSS class 
                    ...item, completed: !item.completed 
            }
            }
            return item
        }))
    }
    return (
              
                <div className="todo-lists">

                    <div className="content">
                        <input type="text"  className={`word ${todo.completed ? 'completed':''}`} value={text}  readOnly />
                    
                    
                        {/* <button className="edit"><i className="fas fa-edit"></i></button> */}
                        <button onClick={deleteButton} className="delete"><i className="fas fa-trash-alt"></i></button>
                        <button onClick={completeButton} className="check"><i className="fas fa-check-square"></i></button>
                    </div>

                </div>
                
    )
}

export default Todo
// line 12 is an array callback function