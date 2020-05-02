import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import pages
import Homepage from './pages/Home';
import Parceirospage from './pages/Parceiros';
import Cursospage from './pages/Cursos';

import Navbar from './components/Navbar/index';


export default function Routes() {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Homepage} />} />
                <Route path="/parceiros" exact component={Parceirospage} />} />
                <Route path="/cursos" exact component={Cursospage} />} />

            </Switch>
        </BrowserRouter>
    );
}


