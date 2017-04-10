import React from 'react';
import ChatMessages from './ChatMessages'
import ChatInputMessage from './ChatInputMessage'

export default class ChatArea extends React.Component {
    render() {
        return (
            <div className="chat-area grid-column">
                <ChatMessages />
                <ChatInputMessage />
            </div>
        )
    }
}