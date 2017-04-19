import React from 'react';
import ChatMessages from './ChatMessages'
import ChatInputMessage from './ChatInputMessage'

export default class ChatArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            messageList: []
        };
        this.handleMessageInfo = this.handleMessageInfo.bind(this);
    }

    handleMessageInfo(info) {
        this.state.messageList.push(info);
        this.state.messageList.push({
            name: this.props.chatname,
            info: info
        })
        this.setState({
            username: this.props.chatname,
            messageList: this.state.messageList
        });

    }

    render() {
        return (
            <div className="chat-area grid-column">
                <h1>Chat Area</h1>
                <ChatMessages chatname={this.state.username} messageList={this.state.messageList}/>
                <ChatInputMessage socket={this.props.socket} passMessageInfo={this.handleMessageInfo}/>
            </div>
        )
    }
}