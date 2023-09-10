import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Usuario/Home';
import Sustentabilidade from './pages/Usuario/Sustentabilidade';
import Devolucao from './pages/Usuario/Devolucao';
import Privacidade from './pages/Usuario/Privacidade';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
         <Route path='/devolucao' element={<Devolucao />} /> 
        <Route path='/privacidade' element={<Privacidade />} />
        <Route path='/sustentabilidade' element={<Sustentabilidade />}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
