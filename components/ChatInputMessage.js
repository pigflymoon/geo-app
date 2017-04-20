import React from 'react'

var typing = false;

export default class ChatInputMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.chatname//pass chatname by props to state
        };

        this.keyDown = this.keyDown.bind(this);
    }

    sendMessage(message,username) {
        if (message && this.props.connected) {
            this.props.passMessageInfo(message,username);//pass message and who is typing back to props
        }
    }


    keyDown(event) {
        if (event.keyCode == 13) {
            console.log('Adding...');
            console.log('connected', this.props.connected)
            // if(this.props.chatname){
            let socket = this.props.socket;
            var message = event.target.value;
            console.log('username', this.state.username);
            if (this.props.connected) {
                this.sendMessage(message,this.state.username)//pass message and  who's typing
                console.log('3---emit  new message', message)
                socket.emit('new message', {
                    username: this.state.username,
                    message: message
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