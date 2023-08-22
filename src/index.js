import React from 'react';
import GlobalStyle from './styles/globalstyle';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landingpage from './pages/landingPage'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Landingpage/>
      <GlobalStyle/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
