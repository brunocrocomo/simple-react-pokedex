import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/pokemon/:id" component={Pokemon} />
        </Switch>
    );
}
