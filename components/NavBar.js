import React from 'react'
import {Link} from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navBar grey darken-4">
                    <div className="wrapper"><div className="logo"><i className="fa fa-globe" aria-hidden="true"></i></div>
                    <input type="checkbox" id="menu-toggle"></input>
                    <label htmlFor="menu-toggle" className="label-toggle"></label>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/quake">Quake</Link></li>
                    </ul>

                    {this.props.children}
                    </div>
                </nav>
                <header className="wrapper">
                    <h1>Big ol' Lorem</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sint corporis dolores omnis
                        consectetur quaerat nesciunt beatae maiores, itaque labore ex vero pariatur nulla non fugiat,
                        facilis eaque sunt doloremque!</p>
                </header>

            </div>
        )
    }
}