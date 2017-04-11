import React from 'react';
import Page from "../Page";
import LoginArea from '../../LoginArea'
import ChatArea from '../../ChatArea'

import io from 'socket.io-client'


var socket = io('/chat');

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Client side : Connected!');
});

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <ChatArea/>;
    }
    return <LoginArea />;
}
export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <Page>
                <div className="container">
                    <Greeting isLoggedIn={this.state.isLoggedIn}/>

                </div>

            </Page>
        )

    }
}