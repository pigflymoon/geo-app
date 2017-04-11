import React from 'react'

export default class ChatInputMessage extends React.Component {

    keyDown(event) {
        if (event.keyCode == 13) {
            console.log('Adding...');
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