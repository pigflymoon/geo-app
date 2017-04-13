import React from 'react'

export default class ChatMessages extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <ul className="messages">
                <li className="log">{this.props.messages}</li>
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
