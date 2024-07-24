import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './components/Form';
import reportWebVitals from './reportWebVitals';
import Fetch from './components/Fetch'
import MultipleReturn from './components/MultipleReturn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <MultipleReturn />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
