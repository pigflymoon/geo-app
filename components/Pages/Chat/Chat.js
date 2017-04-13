import React from 'react';
import Page from "../Page";
import LoginArea from '../../LoginArea'
import ChatArea from '../../ChatArea'

import io from 'socket.io-client'


var socket = io('/chat');

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Client side : Connected!');
});


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: ''
        };
        this.handleUsername = this.handleUsername.bind(this);
    }

    handleUsername(name) {
        this.setState({
            isLoggedIn: true,
            username: name
        })

    }



    renderLoginArea() {
        return (
            <LoginArea getUsername={this.handleUsername}/>
        )
    }

    renderChatArea() {
        return (
            <ChatArea/>
        )
    }


    render() {
        return (
            <Page>
                {this.state.isLoggedIn ? this.renderChatArea() : this.renderLoginArea()}
            </Page>
        )

    }
}