import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Overview from '../components/Analytics/Sections/Overview';
import Advanced from '../components/Analytics/Sections/Advanced';
import FacebookOverview from '../components/Analytics/Facebook/FacebookOverview';
import TwitterOverview from '../components/Analytics/Twitter/TwitterOverview';


const ManageRouter = () => (
    <div>
        <Switch>
            <Route exact path={`/analytics`} render={() => <Redirect to="/analytics/overview"/>} />
            <Route path={`/analytics/overview`} component={Overview} />
            <Route path={`/analytics/advanced`} component={Advanced} />
            <Route path={`/analytics/facebook-overview`} component={FacebookOverview} />
            <Route path={`/analytics/twitter-overview`} component={TwitterOverview} />
        </Switch>
    </div>
);

export default ManageRouter;