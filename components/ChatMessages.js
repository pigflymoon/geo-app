import React from 'react'
let COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
];


export default class ChatMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        }

    }

    componentDidMount() {

        this.setState({
            message: this.props.messageList
        });
    }


    // Gets the color of a username through our hash function
    getUsernameColor(message) {
        // Compute hash code
        var username = message;
        // console.log('user',username)
        var hash = 7;
        for (var i = 0; i < username.length; i++) {
            hash = username.charCodeAt(i) + (hash << 5) - hash;
        }
        // Calculate color
        var index = Math.abs(hash % COLORS.length);
        return {color: COLORS[index]};
    }

    renderMessageInfo() {
        if (this.state.message.length <= 0) {
            return null
        }

        return (
            <ul className="messages">
                {this.state.message.map((message, index) =>
                    <li className="message" key={index}>
                        <span className="username"
                              style={this.getUsernameColor({message})}>{message.name}</span>
                        <span className="message-body">{message.info}</span>
                    </li>
                )}
            </ul>

        )

    }

    render() {
        return (
            <div className="messages">
                {this.renderMessageInfo()}
            </div>
        )
    }
}
