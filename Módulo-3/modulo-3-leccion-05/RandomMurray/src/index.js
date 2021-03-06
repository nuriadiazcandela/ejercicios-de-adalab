import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/index.scss';
import MurrayList from './components/MurrayList';

ReactDOM.render(
  <React.StrictMode>
    <MurrayList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
