import React from 'react'

export default class ChatMessages extends React.Component {
    constructor(props) {
        super(props);
        // this.handleMessages = this.handleMessages.bind(this);
    }

    renderMessageInfo() {
        return (
            <li className="message">
                <span className="username">{this.props.chatname}</span>
                <span className="message-body">{this.props.getMessageInfo}</span>
            </li>
        )
    }

    render() {
        return (
            <ul className="messages">
                <li className="log">{this.props.messages}</li>
                {this.renderMessageInfo()}
            </ul>
        )
    }
}
