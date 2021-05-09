import React from 'react';
import  {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from '../../Pages/About';
import Dashboard from '../../Pages/Dashboard';
import Login from '../../Pages/Login';




const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/login">
                <Login title="welcome" />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
        </Router>
    )
}

export default Routes;
