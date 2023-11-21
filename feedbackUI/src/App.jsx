import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Router from './router/router';
import HostToast from './component/Toastify/Toast'
function App() {


  return (
    <div>
    
    <BrowserRouter>
        <Routes>
          <Route path={"/*"} element={<Router/>} />
        </Routes>
      </BrowserRouter>
      <HostToast />
    </div>
  )
}

export default App
