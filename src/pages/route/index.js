import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './../home';
import About from './../about';
import Login from './../login';
import Register from './../register';
import Dashboard from '../dashboard/Dashboard';
import Index from '../../component/dashboardpages/Index';
import Analytics from '../../component/dashboardpages/Analytics';
import Products from '../../component/dashboardpages/Products';

export default function index() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/dashboard" element={ <Dashboard/> } />
  </Routes>
  
  <Routes>
    <Route exact path='/' element={<Index/>}/>
    <Route  path='analytics' element={<Analytics/>}/>
    <Route  path='products' element={<Products/>}/>
  </Routes>
  
  </div>
  )
}
