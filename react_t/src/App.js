import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);

  // Function to reset the count
  const reset = () => setCount(0);

  // Calculate the background color level based on count
  const colorLevel = Math.min(count, 255); // Clamp the color value between 0 and 255

  return (
    <div
      className="App"
      style={{
        backgroundColor: `rgb(${colorLevel}, ${colorLevel}, ${255 - colorLevel})`,
        transition: 'background-color 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', // Bezier transition for smooth color change
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
