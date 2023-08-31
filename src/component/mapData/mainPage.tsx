import React from "react";
import List from "../mapData/List";
import Info from "../mapData/Info";


const mainPage = () => {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>List of Developers</h1>

        <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
        {
            List.map((developer) => {
                return(
                    <Info name={developer.name} stack={developer.stack} key={developer.name}/>
                );
            })
        }
        </div>
    </div>
  )
}

export default mainPage