import React from 'react';
import {Route} from 'react-router-dom';

import App from './App';
import Greetings from './Greetings';
import SignupPage from './signup/SignupPage';


export default () => {
    return (
    <div className="container">
    <App />
    <Route exact path="/" component={Greetings} />
    <Route exact path="/signup" component={SignupPage} />
    </div>
    );
}
