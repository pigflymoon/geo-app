import React from 'react'
import {Link} from 'react-router-dom'
import './NavLink.scss'

export default class NavLink extends React.Component {
    render() {
        return (
            <div>
                <ul className="navigation">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/quake">Quake</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}