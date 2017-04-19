import React from 'react';

export default class ParticipantArea extends React.Component {

    constructor(props) {
        super(props);

    }

    renderUserNumbersArea() {
        // Display the welcome message
        let number = this.props.userNumbers;
        var message = "Welcome to Socket.IO Chat – ";
        console.log('number', number)
        if (number === 1) {
            message += "there's 1 participant";
        } else {
            message += "there are " + number + " participants";
        }
        return (
            <li>
                {message}
            </li>
        );
    }

    render() {
        return (
            <ul>
                {this.renderUserNumbersArea()}
            </ul>

        )
    }
}