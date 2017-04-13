import React from 'react';
import ChatMessages from './ChatMessages'
import ChatInputMessage from './ChatInputMessage'

export default class ChatArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }



    handleKeyDown(event) {
        if (event.keyCode == 13) {
            let chatName = this.props.Chatname;
            if (chatName) {

            }
        }
    }

    render() {
        return (
            <div className="chat-area grid-column">
                <h1>Chat Area</h1>
                <ChatMessages messages={this.props.getMessages} />
                <ChatInputMessage />
            </div>
        )
    }
}