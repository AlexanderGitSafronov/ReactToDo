import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import OpenTask from '../OpenTask/OpenTask';

const NavRoutes = () => {

    return <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/task/:taskId' element={<OpenTask/>} />
        <Route path='*' element={<p>NOT FOUND</p>} />
    </Routes>
}

export default NavRoutes;

