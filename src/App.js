import React from 'react';
import Route from './pages/route'
import './App.css';
function App() {
  console.log(`Api Base RUL: ${process.env.REACT_APP_API_BASE_URL}`)
  return (
    <div className="App">
   <Route />


   

    </div>
   
  );
}

export default App;
