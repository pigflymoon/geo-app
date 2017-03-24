import React from 'react';
import Page from "../Page";

export default class Home extends React.Component {
    render() {
        let content;
        content = <h1>home</h1>;

        return (

            <Page>
                { content }
            </Page>


        );

    }
}