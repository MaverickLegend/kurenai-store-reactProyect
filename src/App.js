import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros'
import Inicio from './components/Inicio';

function App() {
  const bienvenida = 'Bienvenid@s!';

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path="/productos" element={<ItemListContainer greetings={bienvenida}/>}/>
          <Route path="//productos/:id" element={<ItemDetailContainer />} /> 
          <Route path='/nosotros' element={<Nosotros />}/>              
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
