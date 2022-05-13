
import './App.scss';
import Navbar from './components/Layout/Navbar';

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import Starwars1 from './components/pages/Starwars1';
import Starships from './components/pages/Starships';
import Nyheder from './components/pages/Nyheder';

export const App = () => {
  return (

    
    <div className='Main_content_container'>
      <Navbar/>

<Routes>

 <Route path="/" element={<Home/>} />
 <Route path="/starwars1" element={<Starwars1/>} />
 <Route path="/starships" element={<Starships/>} />
 <Route path="/nyheder" element={<Nyheder/>} />

</Routes>

    </div>
  )
}



export default App;
