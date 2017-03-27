import React from 'react'
import {render} from 'react-dom'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import './stylesheets/main.scss'

import Home from './components/Pages/Home/Home'
import Quake from './components/Pages/Quake/Quake'
import Detail from './components/Pages/Detail/Detail'

render((

    <Router>
        <div>

            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/quake" component={Quake}/>
            <Route path="/detail" component={Detail}/>
        </div>
    </Router >

), document.getElementById('app'))
