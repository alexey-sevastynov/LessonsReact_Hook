import { Routes, Route } from 'react-router-dom';



import Header from './components/Header';
import Home from './components/Home';
import Home75 from './components/Home75';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/1' element={<Home />} />
        <Route path='/73' element={<Home />} />
        <Route path='/75' element={<Home75 />} />
      </Routes>
    </div>

  );
}

export default App;
