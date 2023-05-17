import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Countdown';

const App = () => {
  let [name, setName] = useState('Thold');
  let [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'watching video', type: 'Thomas' },
    { id: 'todo2', title: 'reading book', type: 'Edison' },
    { id: 'todo3', title: 'playing game', type: 'Thomas' },
    { id: 'todo4', title: 'listen music', type: 'Edison' },
  ]);

  //didmount
  useEffect(() => {
    console.log('run use effect')
  }, [address, todos])

  // useEffect(() => {
  //   console.log('run use effect')
  // }, [todos])

  const handleEventClick = (event) => {
    if (!address) {
      alert('empty input');
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: address
    }
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

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    alert('times up')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <CountDown
          onTimesup={onTimesup}
        />
        <span>-------------------</span>
        <NewCountDown
          onTimesup={onTimesup}
        />
        <h1>Todos app with {name} !</h1>
        <Covid />
        {/* <Todo
          myData={todos}
          title='All todos'
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          myData={todos.filter(todo => todo.type === 'Thomas')}
          title='Thomas todos'
          deleteDataTodo={deleteDataTodo}
        />
        <input type='text' value={address} onKeyDown={handleEventKeyDown} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={(event) => { handleEventClick(event) }}>Click me!</button> */}
      </header>
    </div>
  );
}

export default App;
