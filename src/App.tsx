import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page1 from "./component/user/User"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page1/>}/>
      </Routes>
    </div>
  );
}

export default App;
