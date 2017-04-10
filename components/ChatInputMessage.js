import React from 'react'

export default class ChatInputMessage extends React.Component {
    render() {
        return (
            <div>
                <input className="input-message" placeholder="Type here..."/>
            </div>
        )
    }
}