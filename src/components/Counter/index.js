import React, { useState } from 'react'

import "./Counter.css"

export default function Counter() {
    const [counter, setCounter] = useState(0);

    let colorCounter = counter % 2 === 0 ? "text-even" : "text-odd";

    return(
        <div>
            <p className={colorCounter}>COUNTER: {counter}</p>
            <div className="container">
                <button className="btn" onClick={() => setCounter(counter + 1)}> + </button>
                <button className="btn" onClick={() => setCounter(counter - 1)}> - </button>
            </div>

        </div>
    )
}