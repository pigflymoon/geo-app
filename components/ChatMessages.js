import React from 'react'

export default class ChatMessages extends React.Component {
    render() {
        return (
            <ul className="messages">
                <li className="log">Welcome to Socket.IO Chat –</li>
                <li className="message">
                    <span className="username">duck</span>
                    <span className="message-body">Just like a chat group</span>
                </li>
                <li className="message">
                    <span className="username">duck</span>
                    <span className="message-body">Just like a chat group</span>
                </li>
                <li className="message">
                    <span className="username">duck</span>
                    <span className="message-body">Just like a chat group</span>
                </li>
                <li className="message">
                    <span className="username">duck</span>
                    <span className="message-body">Just like a chat group</span>
                </li>
                <li className="message">
                    <span className="username">duck</span>
                    <span className="message-body">Just like a chat group</span>
                </li>
            </ul>
        )
    }
}
