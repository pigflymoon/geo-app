import React from 'react';
import Page from "../Page";

export default class Quakes extends React.Component {
    render() {
        let content;
        content = <h1>Quake</h1>;

        return (

            <Page>
                { content }
            </Page>


        );

    }
}