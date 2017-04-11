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
import Chat from './components/Pages/Chat/Chat'

import io from 'socket.io-client'


var socket = io('/chat');

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Client side : Connected!');
});


render((

    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/quakes" component={Quakes}/>
            <Route path="/quake/:publicID" component={Quake}/>
            <Route path="/chat" component={Chat}></Route>
        </div>
    </Router >


), document.getElementById('app'))
