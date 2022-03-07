import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginScreen from '../views/LoginScreen';
import Dashboard from '../views/Dashboard';
import Page404 from '../views/Page404';


function RootRoute() {
        return (
                <Router>
                        <Routes>
                                <Route path="/" element={ <LoginScreen/>} />
                                <Route path="/dashboard" element={ <Dashboard/>} />
                                <Route path="*" element={ <Page404/>} />
                        </Routes>
                </Router>
        )
}

export default RootRoute
