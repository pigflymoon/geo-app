import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ChatTypingInfoArea extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <h1>Fading at Initial Mount</h1>
            </ReactCSSTransitionGroup>
        )
    }
}