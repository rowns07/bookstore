import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListLivros from './pages/List-Livros/Index';
import Livros from './pages/Livros';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Livros} path="/livros" exact />
            <Route component={ListLivros} path="/" exact />
        </BrowserRouter>
    )
}

export default Routes;