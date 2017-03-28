import React from 'react'
import {render} from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './stylesheets/main.scss'

import Home from './components/Pages/Home/Home'
import Quakes from './components/Pages/Quakes/Quakes'
import Quake from './components/Pages/Quake/Quake'

const QuakeItems = ({match}) => (
    <div>
        <h2>Quake item</h2>
        <ul>
            <li>
                <Link to={`${match.url}/1`}>
                    item 1
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/2`}>
                    item 2
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/3`}>
                    item 3
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:id`} component={QuakeItem}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a item.</h3>
        )}/>

    </div>
)

const QuakeItem = ({match}) => (
    <div><h3>{match.params.id}</h3></div>
)

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

render((

    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/quakes" component={Quakes}/>
            <Route path="/quake/12" component={Quake}/>
            <Route path="/quakeItems" component={QuakeItems}/>
            <Route path="/Topics" component={Topics}/>
        </div>
    </Router >


), document.getElementById('app'))
