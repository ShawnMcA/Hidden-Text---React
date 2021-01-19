import './App.css';
import { useState } from 'react';

function App() {
  const [position, setPosition] = useState([0, 0]);

  const handleMouseMove = e => {
    setPosition([
      e.clientY,
      e.clientX
    ]);
  }

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <h1 className='app-header'>Hello, welcome to my app.</h1>
      <div className='moveable-object' style={{ draggable: false, top: position[0], left: position[1]}}>
        <p className='pointer'>.</p>
      </div>
    </div>
  );
}

export default App;
