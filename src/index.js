import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import Card from './top-netflix/card.jsx';
import Sdata from './top-netflix/sdata.jsx';


function ncard(val){
  return(
    <Card
   imgsrc={val.imgsrc}
   title={val.title}
   sname={val.sname}
   link={val.link}
  />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='heading_style'>List of Top Three Netflix</h1>
  
  {Sdata.map(ncard)}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
