import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    // button funcntion start here
    const countIncrement = () => {
        setCount(count + 1)
    }

    const countZero = () => {
        let Initialcount = 0
        setCount(Initialcount)
    }
    const countDecrement = () => {
        let initialCount = 0;
        count <= 0? setCount(initialCount) : setCount(count - 1)
    }
    // button function end here.


  return (
    <div>
        <p>{count}</p>

        <div>
            <button onClick={countIncrement}>Increase</button>
            <button onClick={countZero}>Set to Zero</button>
            <button onClick={countDecrement}>Decrease</button>
        </div>

    </div>
  )
}

export default Counter