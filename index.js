import React from 'react'
import {render} from 'react-dom'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import './stylesheets/main.scss'

import Home from './components/Pages/Home/Home'
import Quakes from './components/Pages/Quakes/Quakes'
import Quake from './components/Pages/Quake/Quake'



render((

    <Router>
        <div>

            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/quakes" component={Quakes}/>
            <Route path="/quake/:publicID" component={Quake}/>
        </div>
    </Router >


), document.getElementById('app'))
