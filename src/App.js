import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('Thold');
  let [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'watching video' },
    { id: 'todo2', title: 'reading book' },
    { id: 'todo3', title: 'playing game' },
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('empty input');
      return;
    }
    let newTodo = { id: 'abc', title: address }
    setTodos([...todos, newTodo])
    setAddress('')

  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todos app with {name} !</h1>
        <div className='todos-container'>
          {todos.map(todo => {
            return (
              <li className='todo-child' key={todo.id}>{todo.title}</li>
            )
          })}
        </div>
        <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={(event) => { handleEventClick(event) }}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
