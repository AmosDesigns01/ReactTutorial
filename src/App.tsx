import React from 'react';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Page1 from "./component/user/User"


function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Page1/>}/>
      </Routes>
    </div>
  );
}

export default App;
