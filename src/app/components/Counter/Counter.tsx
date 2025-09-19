"use client";

import { useState } from "react";
import { gsap } from "gsap";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (delta: number) => {
    const prev = count;
    const next = Math.max(0, prev + delta);
    setCount(next);

    // Create a span for the previous number
    if (next !== prev) {
      const span = document.createElement("span");
      span.textContent = prev.toString();
      span.className = "oldNumber";

      const container = document.getElementById("counter-container");
      container?.appendChild(span);

      // Animate the span out with GSAP
      gsap.to(span, {
        opacity: 0,
        scale: 3,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          span.remove();
        },
      });
    }
  };

  return (
    <div className="counterWrapper">
      <div id="counter-container" className="circle">
        <span>{count}</span>
      </div>
      <div className="btnWrapper">
        <button onClick={() => handleClick(1)} className="btn">
          +
        </button>
        <button onClick={() => handleClick(-1)} className="btn">
          -
        </button>
      </div>
    </div>
  );
}
