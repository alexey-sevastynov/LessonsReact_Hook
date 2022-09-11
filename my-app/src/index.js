import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clicker from './components/Clicker';
import Timer from './components/Timer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);

