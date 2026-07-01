import './TodoButtonCreate.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoButtonCreate() {
  const { setOpenModal } = React.useContext(TodoContext);  // ← toma del context

  return (
    <button className="TodoButtonCreate" onClick={() => setOpenModal(state => !state)}>
      +
    </button>
  );
}

export { TodoButtonCreate };