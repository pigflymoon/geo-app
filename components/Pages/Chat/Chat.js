import React from 'react';
import Page from "../Page";
import LoginArea from '../../LoginArea'
import ChatArea from '../../ChatArea'

import io from 'socket.io-client'


var connected = false;
var message = '';


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
            connected: false,
            username: '',
            messages: ''
        };
        this.handleUsername = this.handleUsername.bind(this);

    }


    handleUsername(name) {
        let username = name.trim();
        if (username) {
            this.setState({
                isLoggedIn: true,
                username: username
            });

            self = this;
            socket.on('login', function (data) {

                connected = true;
                // Display the welcome message
                var message = "Welcome to Socket.IO Chat – ";
                console.log('data', data)
                if (data.numUsers === 1) {
                    message += "there's 1 participant";
                } else {
                    message += "there are " + data.numUsers + " participants";
                }
                self.setState({
                    messages: message
                })
                //

            });

            socket.emit('add user', username);

        }
    }

    renderLoginArea() {
        return (
            <LoginArea getUsername={this.handleUsername}  />
        )
    }

    renderChatArea() {
        return (
            <ChatArea Chatname={this.state.username} getMessages={this.state.messages} />
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