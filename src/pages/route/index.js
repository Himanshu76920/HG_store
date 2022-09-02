import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './../home';
import About from './../about';
import Login from './../login';
import Register from './../register';

export default function index() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
  </Routes></div>
  )
}
