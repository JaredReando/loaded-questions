import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound404 from '../pages/not_found_404';
import LandingPage from "../pages/landing_page";

const AppRouter = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route component={NotFound404} />
            </Switch>
        </BrowserRouter>
    );
};

/*withAuthProvider wraps 'App' in a <AuthUserContext.Provider />...
 HOC. Any lower hierarchy component can access Firebase session status
 by connecting to the consumer provider: withAuthConsumer.
 Consumer will update all connected components with any Firebase Auth
 events (logged in, auth user object, etc...)
 */
export default AppRouter;
