import React from 'react';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Page1 from "./component/user/User";
import Page2 from "./component/list/list";
import Page3 from "./component/object/userObject";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
      </Routes>
    </div>
  );
}

export default App;
