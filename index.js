import React from 'react'
import {render} from 'react-dom'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './style/reset.css'

import NavLink from './components/Nav/NavLink'
import Home from './components/Pages/Home/Home'
import Quake from './components/Pages/Quake/Quake'


render((

    <Router>
        <div>
            <NavLink />
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/quake" component={Quake}/>
        </div>
    </Router >

), document.getElementById('app'))
