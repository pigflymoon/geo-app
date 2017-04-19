import React from 'react'

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


    renderMessageInfo() {
        if (this.state.message.length <= 0) {
            return null
        }

        return (
            <ul className="messages">
                {this.state.message.map((message, index) =>
                    <li className="message" key={index}>
                        <span className="username">{message.name}</span>
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
