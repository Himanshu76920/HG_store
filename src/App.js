import React from 'react';
import Route from './pages/route'
import Header from './component/header/Header';
import './App.css';
import Styl from './css/Variables.css'
function App() {
  console.log(`Api Base RUL: ${process.env.REACT_APP_API_BASE_URL}`)
  return (
    <div className="App">
      {/* <Header/> */}
   <Route />


    </div>
   
  );
}

export default App;
