import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Desainer from './components/Desainer';


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Desainer />}/>
      </Routes>
    </>
  )
}

export default App
