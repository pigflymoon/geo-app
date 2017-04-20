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


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            connected: false,
            username: '',
            messages: '',
            usernumbers: 0
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

            socket.emit('add user', username);
            console.log('1---add user')

            var self = this;
            socket.on('login', function (data) {
                console.log('2---login')
                console.log('login data', data)

                connected = true;
                // self.addParticipantsMessage(data);
                console.log(data.numUsers)
                self.setState({
                    usernumbers: data.numUsers,
                    connected: true
                })
                //

            });


            // Whenever the server emits 'user joined', log it in the chat body
            socket.on('user joined', function (data) {
                // log(data.username + ' joined');
                console.log('---user joined')
                self.setState({
                    username: data.username,
                    usernumbers: data.numUsers
                })
            });

            // // Whenever the server emits 'new message', update the chat body
            socket.on('new message', function (data) {
                console.log('4---get new message', data)
                console.log('4---get username', data.message.username)
                console.log('4---get message', data.message.message)
                self.setState({
                    username: data.message.username,
                    messages: data.message.message
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
                <ChatArea chatname={this.state.username} messages={this.state.messages} socket={socket}
                          connected={this.state.connected}/>
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