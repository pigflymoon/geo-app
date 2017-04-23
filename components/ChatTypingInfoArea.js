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
        var items = '';
        console.log('typing state is ', this.state.typingState)
        if (this.state.typingState) {
            items = this.props.chatname + ' is typing'
        }

        return (
            <ReactCSSTransitionGroup transitionName="example"
                                     transitionEnterTimeout={1500} transitionLeaveTimeout={1500}>
                <div className="isTyping">{items}</div>

            </ReactCSSTransitionGroup>
        );
    }

}