import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const bienvenida = 'Bienvenid@s!';

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={bienvenida}/>}/> 
        </Routes>
        <ItemDetailContainer />               
      </BrowserRouter>
    </div>
  );
}

export default App;
