import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ChatTypingInfoArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typingState: this.props.getTypingstate
        }
    };


    componentWillReceiveProps(nextProps) {
        this.setState({
            typingState: nextProps.getTypingstate
        })
    }

    render() {


        return (
            <ReactCSSTransitionGroup component="ul" className="messages" transitionName="typing"
                                     transitionEnterTimeout={1500} transitionLeaveTimeout={1500}>

                {this.state.typingState ? (
                        <li className="isTyping message">
                            <span className="username">{this.props.chatname}</span>
                            <span className="message-body">is typing</span></li>
                    ) : null}


            </ReactCSSTransitionGroup>
        );
    }

}