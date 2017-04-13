import React from 'react';
import ChatMessages from './ChatMessages'
import ChatInputMessage from './ChatInputMessage'

export default class ChatArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            messageInfo: ''
        };
        this.handleMessageInfo = this.handleMessageInfo.bind(this);
    }

    handleMessageInfo(info) {
        console.log('info', info)
        this.setState({
            username: this.props.chatname,
            messageInfo: info
        })
    }

    render() {
        return (
            <div className="chat-area grid-column">
                <h1>Chat Area</h1>
                <ChatMessages chatname={this.state.username} messages={this.props.getMessages} getMessageInfo={this.state.messageInfo}/>
                <ChatInputMessage  socket={this.props.socket} passMessageInfo={this.handleMessageInfo}/>
            </div>
        )
    }
}