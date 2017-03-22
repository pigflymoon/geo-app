import React from 'react'
import {render} from 'react-dom'
import {
    HashRouter,
    Route
} from 'react-router-dom'
import App from './components/App/App'
import Home from './components/Pages/Home/Home'
import Quake from './components/Pages/Quake/Quake'

render((

    <HashRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home}></Route>
            <Route path="/quake" component={Quake}></Route>

        </div>
    </HashRouter >

), document.getElementById('app'))
