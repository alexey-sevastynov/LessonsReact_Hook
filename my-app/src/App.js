import React from 'react';
import { Context } from './components/useContext/Context';
import Books from './components/useContext/Books';


function App() {

  return (
    <Context className="App">
      <Books />
    </Context>
  );
}

export default App;
