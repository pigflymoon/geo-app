import React from 'react';
import Page from "../Page";
import QuakeDetail from '../../QuakeDetail'


export default class Detail extends React.Component {
    render() {
        return (

            <Page>
                <div className="container">
                    <QuakeDetail type="About Detail" />
                </div>

            </Page>


        );

    }
}