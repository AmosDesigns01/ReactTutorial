import styles from "./style.module.css";
import React from 'react';

const list = () => {
  const names: string[] = ["Pedro", "Amos", "Tunnji", "Laide", "Josh"];

  return(
    <div className="nameList">
      {
        names.map((name) => {
          return (
            <div key={name}>
              <h1>{name} is wishing you a happy birthday</h1>
            </div>
          )
        })
      }
    </div>
  )
  
}

export default list