import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery';
import reportWebVitals from './reportWebVitals';

window.$ = $;  // Attach jQuery globally

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
