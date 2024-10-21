import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

import NavRoutes from './components/Routes/NavRoutes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <NavRoutes/>
    </BrowserRouter>
 
 
);


