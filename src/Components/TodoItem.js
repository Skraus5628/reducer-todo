import React from 'react';

const TodoItem = ({ todo, dispatch, props}) => {


    return (
        <div className='todo-item'>
            <span className='item' 
            style={todo.completed ? {textDecoration: 'line-through', backgroundColor: '#d17d7c' } : {}} 
            
            onClick={() => dispatch({type: 'toggle', payload: todo.id})}>{todo.item}</span>
        </div>
    );
};

 export default TodoItem; 