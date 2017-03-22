import React from 'react';
import NavLink from '../Nav/NavLink'
import './App.scss'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <ul className="navigation">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/quake">Quake</NavLink></li>
                    </ul>
                </header>
                {this.props.children}
            </div>
        )
    }
}