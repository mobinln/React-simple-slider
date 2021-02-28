import React, { useState } from "react";
import "./App.css";

import item1 from "./assets/1.jpg";
import item2 from "./assets/2.jpg";
import item3 from "./assets/3.jpg";
import item4 from "./assets/4.jpg";

const imgs = [item1, item2, item3, item4];

function App() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index - 1) % 4);
  };
  const handleNext = () => {
    setIndex((index + 1) % 4);
  };

  return (
    <div className="App">
      <div
        className="Slider"
        style={{
          background: `url(${imgs[index < 0 ? index + 4 : index]})`,
        }}
      >
        <div className="btns">
          <button onClick={handlePrev}>
            <span role='img' aria-label='previous'>
              👈
            </span>
          </button>
          <button onClick={handleNext}>
            <span role='img' aria-label='next'>
              👉
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
