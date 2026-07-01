import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { setOpenModal,
            addTodo
     } = React.useContext(TodoContext);
    
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault(); 
        addTodo(newTodoValue);
        setOpenModal(false);
     }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        
        <form onSubmit={ onSubmit }>
            <label>Escribe el nuevo TODO</label>
            <textarea 
                placeholder="Escribe aqui" 
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel">CANCEL</button> 
                <button type="submit" 
                className="TodoForm-button TodoForm-button--add">CREATE</button> 
            </div>
    
        </form>
    );
}

export { TodoForm }