import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {
  let [name, setName] = useState('Thold');
  let [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'watching video', type: 'Thomas' },
    { id: 'todo2', title: 'reading book', type: 'Edison' },
    { id: 'todo3', title: 'playing game', type: 'Thomas' },
    { id: 'todo3', title: 'listen music', type: 'Edison' },
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

  const handleEventKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      handleEventClick(event);
    }
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todos app with {name} !</h1>
        <Todo
          myData={todos}
          title='All todos'
        />
        <Todo
          myData={todos.filter(todo => todo.type === 'Thomas')}
          title='Thomas todos'
        />
        <input type='text' value={address} onKeyDown={handleEventKeyDown} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={(event) => { handleEventClick(event) }}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
