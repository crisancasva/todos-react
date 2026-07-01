import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoButtonCreate } from '../TodoButtonCreate/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import React from 'react';
import { Modal } from '../Modal/index.js';
import { TodoForm } from '../TodoForm/index.js'

import { TodoContext } from '../TodoContext/index.js';

function AppUI() {
    const {loading, 
        error, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal, 
        setOpenModal
    } = React.useContext(TodoContext);
    return (
       <React.Fragment>

      <TodoCounter  />
      <TodoSearch  />
      <TodoList>  
            {loading && (
                <>
                    <TodoLoading />
                    <TodoLoading />
                    <TodoLoading />
                </>
            )}
            {error && <TodoError />}
            {(!loading && searchedTodos.length === 0) && <TodoEmpty />}
            {searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
    
      <TodoButtonCreate />

      {openModal &&(
      <Modal>
        <TodoForm />
      </Modal>
        )}
    </React.Fragment>
    );
}

export { AppUI };