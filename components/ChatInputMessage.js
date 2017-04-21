import React from 'react'

var TYPING_TIMER_LENGTH = 400; // ms
var typing = false;
var lastTypingTime;


export default class ChatInputMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.chatname//pass chatname by props to state
        };

        this.keyDown = this.keyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.refs.inputMessage.focus();
    }

    sendMessage(message, username) {
        if (message && this.props.connected) {
            this.props.passMessageInfo(message, username);//pass message and who is typing back to props
        }
    }


    keyDown(event) {
        if (event.keyCode == 13) {
            console.log('Adding...');
            console.log('connected', this.props.connected)

            let socket = this.props.socket;
            var message = event.target.value;


            if (this.props.connected) {
                this.sendMessage(message, this.state.username)//pass message and  who's typing
                console.log('3---emit  new message', message)

                socket.emit('new message', {
                    username: this.state.username,
                    message: message
                });
            }

            socket.emit('stop typing');
            typing = false;
            this.refs.inputMessage.value = '';
        }
    }

    handleChange(event) {
        console.log('I am typing in input message box')
        this.updateTyping();
    }

    updateTyping() {
        if (this.props.connected) {
            if (!typing) {
                typing = true;
                this.props.socket.emit('typing');
            }
            lastTypingTime = (new Date()).getTime();
            var self = this;
            setTimeout(function () {
                var typingTimer = (new Date()).getTime();
                var timeDiff = typingTimer - lastTypingTime;
                if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
                    console.log('stop typing')
                    self.props.socket.emit('stop typing');
                    typing = false;
                }
            }, TYPING_TIMER_LENGTH);
        }
    }


    render() {
        return (
            <div>
                <input className="input-message" ref="inputMessage" onKeyDown={this.keyDown} placeholder="Type here..."
                       onChange={this.handleChange}/>
            </div>
        )
    }
}