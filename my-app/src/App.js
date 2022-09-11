import './App.css';
import React, { useEffect, useState } from 'react';
import Clicker from './components/Clicker';
import WithRef from './components/WithRef';

function App() {
  const [isClicker, setClicker] = useState(false);


  return (
    <div className="App">
      <h2>react app</h2>
      <WithRef />
      <button className='btn btn1' onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
      {isClicker && <Clicker />}

    </div>
  );
}

export default App;
