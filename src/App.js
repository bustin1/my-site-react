import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Snowfall from 'react-snowfall'

import Navbar from './Navbar';
import Text from './Text';

import data from './text.json';

function App() {
    return (
        <Router>
            <div style={{ height: window.height, width: window.width, background: 'transparent' }}>
                <Snowfall />
            </div>
            <Navbar />
            <Switch>
                <Route path='/' exact />
            </Switch>
            <div className="main">
                <Text content={ data.about }/>
                <Link className="project-link" to='/Projects'> 
                    <div> Projects </div> 
                </Link>
            </div>
        </Router>
    )
}

export default App;