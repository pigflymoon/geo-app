import React from 'react'

var typing = false;

export default class ChatInputMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.chatname
        };

        this.keyDown = this.keyDown.bind(this);
    }

    sendMessage(message) {

        if (message && this.props.connected) {
            this.props.passMessageInfo(message)
        }
    }


    keyDown(event) {
        if (event.keyCode == 13) {
            console.log('Adding...');
            console.log('connected', this.props.connected)
            // if(this.props.chatname){
            let socket = this.props.socket;
            var message = event.target.value
            if (this.props.connected) {
                this.sendMessage(message)
                // this.props.passMessageInfo(event.target.value);
                // tell server to execute 'new message' and send along one parameter
                // socket.emit('new message', event.target.value);
                socket.emit('new message', {
                    message: message,
                    username: this.state.username
                });
            }

            socket.emit('stop typing');
            typing = false;
            // }


        }
    }

    render() {
        return (
            <div>
                <input className="input-message" onKeyDown={this.keyDown} placeholder="Type here..."/>
            </div>
        )
    }
}