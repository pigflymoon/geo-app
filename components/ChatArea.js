import React from 'react';
import ChatMessages from './ChatMessages'
import ChatInputMessage from './ChatInputMessage'
import ChatTypingInfoArea from './ChatTypingInfoArea'

export default class ChatArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.chatname,
            messageList: []
        };


        this.handleMessageInfo = this.handleMessageInfo.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('nextProps',nextProps)
        console.log('Chat Area ---next prop chatname', nextProps.chatname)
        console.log('Chat Area ---next prop messages', nextProps.messages)
        this.state.messageList.push({
            name: nextProps.chatname,
            info: nextProps.messages
        })
        this.setState({
            username: nextProps.chatname,
            messageList: this.state.messageList
        })
    }

    handleMessageInfo(messages, username) {//get message and who is typing from props

        console.log('messages',messages)

            this.state.messageList.push({
                name: username,
                info: messages
            })

            this.setState({
                username: username,
                messageList: this.state.messageList
            });



    }


    render() {
        return (
            <div className="grid-column">
                <h1>Chat Area</h1>

                <ChatMessages chatname={this.state.username} messageList={this.state.messageList}/>
                <ChatTypingInfoArea/>
                <ChatInputMessage chatname={this.state.username} socket={this.props.socket}
                                  passMessageInfo={this.handleMessageInfo}
                                  connected={this.props.connected}/>
            </div>
        )
    }
}