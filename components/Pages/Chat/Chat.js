import React from 'react';
import Page from "../Page";
import ChatArea from '../../ChatArea'

export default class Chat extends React.Component {
    render() {
        return (
            <Page>
                <div className="container">
                    <ChatArea />
                </div>

            </Page>
        )

    }
}