import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Kart from './pages/Kart';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Kart} path="/Kart" />
        </BrowserRouter>
    )
}

export default Routes;