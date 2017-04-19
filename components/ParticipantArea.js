import React from 'react';

export default class ParticipantArea extends React.Component {

    constructor(props) {
        super(props);

    }

    renderUserNumbersArea() {
        // Display the welcome message
        let number = this.props.userNumbers;
        var message = "Welcome to Socket.IO Chat – ";
        var user = '';
        console.log('number', number)
        console.log('userName', this.props.userName)
        user = this.props.userName + ' joined';
        if (number === 1) {

            message += "there's 1 participant";
        } else {
            message += "there are " + number + " participants";
        }
        return (

            <ul className="messages">
                <li className="log">{user}</li>
                <li className="log">{message}</li>
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderUserNumbersArea()}
            </div>

        )
    }
}