import React from 'react';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Page1 from "./component/user/User";
import Page2 from "./component/list/list";
import Page3 from "./component/object/userObject";
import Page4 from "./component/task/task1/planetData";
import Page5 from "./component/task/task2/Counter";
import Page6 from "./component/todoList/TodoList";
import Page7 from "./component/mapData/mainPage";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
        <Route path='/page5' element={<Page5 />} />
        <Route path='/page6' element={<Page6 />} />
        <Route path='/page7' element={<Page7 />} />
      </Routes>
    </div>
  );
}

export default App;
