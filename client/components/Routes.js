import React from 'react';
import {Route} from 'react-router-dom';

import App from './App';
import Greetings from './Greetings';
import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import NewEventPage from './events/NewEventPage';
import requireAuth from '../utils/requireAuth';

export default () => {
    return (
    <div className="container">
    <App />
    <Route exact path="/" component={Greetings} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route  path="/new-event" component={requireAuth(NewEventPage)} />
    </div>
    );
}
