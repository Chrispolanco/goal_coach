import React from 'react'; 
import ReactDom from 'react-dom'; 
import { Router, Route, browserHistory } from 'react-router'; 

import App from './component/App'; 
import SignIn from './component/SignIn'; 
import SignUp from './component/SignUp'; 

ReactDom.render(
    <Router path='/' history={browserHistory}>
        <Route path="/app" component={App} /> 
        <Route path="/signin" component={SignIn} /> 
        <Route path="signup" component={SignUp} /> 
    </Router>, document.getElementById('root')
)