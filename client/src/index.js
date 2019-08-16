import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import AddTicket from "./components/AddTicket";
import About from "./components/About";

// could create single page application and get rid of react-router-dom

// google sign in client id: 970856609100-6bc1d8gv7ieu5q4nor0foqkhvedsmf28.apps.googleusercontent.com
// google sign in client secret: xB2EgXKSVeWRB5xZdz_K7ffv

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/add" component={AddTicket} />
            <Route path="/about" component={About} />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
