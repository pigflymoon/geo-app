import React from 'react';
import Page from "../Page";
import ParticipantArea from '../../ParticipantArea'
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
                console.log('login data', data)

                connected = true;
                // self.addParticipantsMessage(data);
                self.setState({
                    messages: data,
                    usernumbers: data.numUsers,
                    connected: true
                })
                //

            });

            socket.emit('add user', username);

            // Whenever the server emits 'user joined', log it in the chat body
            socket.on('user joined', function (data) {
                // log(data.username + ' joined');
                console.log('data', data)
                self.setState({
                    username: data.username,
                    usernumbers: data.numUsers
                })
            });

        }
    }


    renderLoginArea() {
        return (
            <LoginArea getUsername={this.handleUsername}/>
        )
    }

    renderChatArea() {
        return (
            <div className="chat-area">
                <ParticipantArea userNumbers={this.state.usernumbers} userName={this.state.username}/>
                <ChatArea chatname={this.state.username} socket={socket} connected={this.state.connected}/>
            </div>


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