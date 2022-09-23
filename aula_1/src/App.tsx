import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Menu } from './componentes/Menu';
import { Contatos } from './pages/Contatos';
import { Home } from './pages/Home';
import { Servicos } from './pages/Servicos';

//mais de um elemento eu uso fragmentação
function App() {
  return (
    <>
     <BrowserRouter>
     <Menu/>
     <Routes>
       <Route path='/home' element={<Home/>} />
       <Route path='/contatos' element={<Contatos/>} />
       <Route path='/servicos' element={<Servicos/>} />
       
       
       
      </Routes>
       </BrowserRouter>
    </>
  );
}
export default App;


