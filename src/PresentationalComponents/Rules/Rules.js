import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';

const ListRules = asyncComponent(() => import(/* webpackChunkName: "ListRules" */ './ListRules'));
const ViewRule = asyncComponent(() => import(/* webpackChunkName: "ListRules" */ './ViewRule'));

const Rules = () => {
    return (
        <React.Fragment>
            <h1>Rules</h1>
            <Switch>
                <Route exact path='/subscriptions/rules' component={ ListRules } />
                <Route path='/subscriptions/rules/:id' component={ ViewRule } />
            </Switch>
        </React.Fragment>
    );
};

export default Rules;
