import React from 'react';
import ChatMessages from './ChatMessages'
import ChatInputMessage from './ChatInputMessage'

export default class ChatArea extends React.Component {
    render() {
        return (
            <div className="chat-area grid-column">
                <h1>Chat Area</h1>
                <ChatMessages />
                <ChatInputMessage />
            </div>
        )
    }
}