import React from 'react';
import ChatMessages from './ChatMessages'
import ChatInputMessage from './ChatInputMessage'

export default class ChatArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.chatname,
            messageList: []
        };
        console.log('prop chatname',this.props.chatname)

        this.handleMessageInfo = this.handleMessageInfo.bind(this);
    }

    handleMessageInfo(messages) {


        // this.state.messageList.push(this.props.messages);
        console.log('prop messages',messages)
        console.log('prop chatname',this.state.username)
        this.state.messageList.push({
            name: this.state.username,
            info: messages
        })
        this.setState({
            username: this.props.chatname,
            messageList: this.state.messageList
        });

    }


    render() {
        return (
            <div className="grid-column">
                <h1>Chat Area</h1>

                <ChatMessages chatname={this.state.username} messageList={this.state.messageList}/>
                <ChatInputMessage chatname={this.state.username} socket={this.props.socket}
                                  passMessageInfo={this.handleMessageInfo}
                                  connected={this.props.connected}/>
            </div>
        )
    }
}