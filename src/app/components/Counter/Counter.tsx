'use client'
import React, { useState } from "react";
import styles from './counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-wrapper">
        <div className="circle">
            <span className="number">{count}</span>
        </div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
