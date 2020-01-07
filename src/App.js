import React, { useReducer } from 'react';
import { todos, reducer } from './Reducers/Reducer';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import { useInput } from './Components/useInput';
import styled from 'styled-components';
import './App.css';


// Styles

// const BodyBox = styled.body`
//   background-color: black;
//   color: white;
// `
const Container = styled.section`
display: flex;
flex-direction: column;

// align-items: center;

`
const FormBox = styled.form`
display: flex;
margin-left: 25%;

`


function App() {
  const [todoList, dispatch] = useReducer(reducer, todos);
  const [todoInput, setTodoInput, handleTodoInput] = useInput('');

  const handleSubmit = (e) => {
    const value = e.target.todoInput.value;
    dispatch({type: 'add', payload: value});
    setTodoInput('');
    e.preventDefault();
  };


  return (
   
    <Container>
    <div className='container'>
      <h1 className="title">ToDo List</h1>
      <FormBox>
      <TodoForm todoInput={todoInput} 
      handleTodoInput={handleTodoInput} 
      handleSubmit={handleSubmit} 
      dispatch={dispatch}/>
      </FormBox>
      <TodoList todoList={todoList} dispatch={dispatch}/>
    </div>
    </Container>
    
  )
}

export default App;