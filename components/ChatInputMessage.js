import React from 'react'

var typing = false;

export default class ChatInputMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };

        this.keyDown = this.keyDown.bind(this);
    }


    keyDown(event) {
        if (event.keyCode == 13) {
            console.log('Adding...');
            this.props.passMessageInfo(event.target.value);
            let socket = this.props.socket;
            socket.emit('stop typing');
            typing = false;

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