import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// the below is imported for testing purposes 
import UsersTest from './components/UserTest'

ReactDOM.render(
  <React.StrictMode>
    {/* Users is a test file to verify connection of react to backend */}
    <div><App /><UsersTest/></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();