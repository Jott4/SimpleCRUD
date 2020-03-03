import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './components/register/index';
import Login from './components/login/index';
import Dashboard from './components/dashboard/index';

import api from './util/api';

function Routes() {
    async function handleCreateUser(data) {
        await api.post('/users', data);
    }

    async function handleLoginUser(data) {
        await api.post('/auth', data);
        window.location.href = "/dashboard";

    }

    async function handleUpdateUser(data) {
        await api.put('/users', data); 
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Register onSubmit={handleCreateUser}/>
                </Route>
                <Route path="/login">
                    <Login onSubmit={handleLoginUser}/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard onSubmit={handleUpdateUser}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;