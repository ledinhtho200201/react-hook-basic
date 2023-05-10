import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('Thold');
  let [address, setAddress] = useState('');

  const handleEventClick = (event) => {
    console.log(address)
    setName(address)
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
        <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
        <button type='button' onClick={(event) => { handleEventClick(event) }}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
