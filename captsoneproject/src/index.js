import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import PollenProvider from './PollenProvider';
import Root from './Root';
import WeatherProvider from './WeatherProvider';

//import Root from './Root';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <PollenProvider>
    <WeatherProvider>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
    </WeatherProvider>
    </PollenProvider >
   
    
  </React.StrictMode>,
);  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

