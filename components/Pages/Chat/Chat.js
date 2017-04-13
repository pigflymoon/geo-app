import React from 'react';
import Page from "../Page";
import LoginArea from '../../LoginArea'
import ChatArea from '../../ChatArea'

import io from 'socket.io-client'


var socket = io('/chat');
var connected = false;

function addParticipantsMessage(data) {
    var message = '';
    console.log('data number',data)
    if (data.numUsers === 1) {
        message += "there's 1 participant";
    } else {
        message += "there are " + data.numUsers + " participants";
    }
}

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Client side : Connected!');
});

socket.on('login', function (data) {
    connected = true;
    // Display the welcome message
    var message = "Welcome to Socket.IO Chat – ";
    console.log('data', data)
    addParticipantsMessage(data);
});


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            connected: false,
            username: ''
        };
        this.handleUsername = this.handleUsername.bind(this);

    }



    handleUsername(name) {
        if (name.trim()) {
            this.setState({
                isLoggedIn: true,
                username: name
            });
            socket.emit('add user', name);
        }
    }

    renderLoginArea() {
        return (
            <LoginArea getUsername={this.handleUsername}/>
        )
    }

    renderChatArea() {
        return (
            <ChatArea Chatname={this.state.username}/>
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