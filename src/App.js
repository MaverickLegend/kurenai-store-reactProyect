import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  const bienvenida = 'Bienvenid@s!';

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greetings={bienvenida}/>
      </header>
    </div>
  );
}

export default App;
