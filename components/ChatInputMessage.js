import React from 'react'



export default class ChatInputMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.chatname//pass chatname by props to state

        };

        this.keyDown = this.keyDown.bind(this);
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

            this.refs.inputMessage.value = '';
        }
    }




    render() {
        return (
            <div>
                <input className="input-message" ref="inputMessage" onKeyDown={this.keyDown} placeholder="Type here..."
                      />
            </div>
        )
    }
}